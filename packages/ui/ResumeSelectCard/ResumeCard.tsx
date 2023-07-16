import * as React from "react";
import styled from "styled-components";
import InnerResume from "./InnerResume";
//?TODO: Import Icons

interface styledResumeContainerTypes{
    cardWidth?:string;
    cardminHeight?:string;
  }

interface styledHeadingTypes{
    
    width: string;
    height: string;
    fontfamily?: string;
    fontweight: number;
    fontsize: string;
    lineheight: string;
    color:string;

}
  
interface propsTypes { 
  cardWidth?:string;
  cardminHeight?:string;
}

interface styledIconsTypes{
  width:string,
  height:string;
}

interface resumeUploaderTypes{
  action?:string;
}

interface resumeListTypes{
  minheight?:string;
  maxheight?:string;
  scrollbarNormalclr?:string;
  scrollbarHoverclr?:string;
}

interface styledInputTypes{
  type:string;
}

const StyledResumeContainer=styled.div<styledResumeContainerTypes>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 20px;
    width: ${props => props.cardWidth ? props.cardWidth : "379px"};
    height: fit-content;
    min-height: ${props => props.cardminHeight ? props.cardminHeight: "465px"};
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); //! Comment this line when used in screens - Just for representation purpose
    border-radius: 16px;
`;

const StyledHeading=styled.h1<styledHeadingTypes>`
    width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    margin:0;
    font-family: ${(props)=>props.fontfamily ? props.fontfamily : 'Galano Grotesque Alt'};
    font-style: normal;
    font-weight: ${(props)=>props.fontweight};
    font-size: ${(props)=>props.fontsize};
    line-height: ${(props)=>props.lineheight};
    color: ${(props)=>props.color}
`;

const Container1=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 15px;
    width: 100%;
    height: auto;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

const ResumeList=styled.li<resumeListTypes>` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    gap: 13px;
    padding: 5px;
    width: inherit;
    min-height: ${(props)=> props.minheight ? props.minheight: "100px"};
    max-height: ${(props)=> props.minheight ? props.minheight: "300px"};
    overflow-y: scroll;
    flex-grow: 0;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
      height: 100%;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background:${(props)=>props.scrollbarNormalclr ? props.scrollbarNormalclr : "rgba(60,60,60,0.4)"};
      height:20%;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${(props)=>props.scrollbarHoverclr ? props.scrollbarHoverclr : "rgba(60,60,60,0.6)"}; 
    }
`;

const ResumeUploader=styled.form.attrs<resumeUploaderTypes>(
    (props)=>({action: props.action ? props.action : "# "}) //?TODO: Interface
)`
  width: 100%;
  height: 180px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  padding: 32px;
  gap: 24px;
  background: #EDF2FB;
  border: 2px solid #D6E2FD;
  border-radius: 6px;
  align-self: stretch;

`;

const StyledIcons=styled('i')<styledIconsTypes>` //?Add Icons
    width:${(props)=>props.width ? props.width : "24px"};
    height:${(props)=>props.height? props.height: "24px"};
    background-color: #3636ca; // Remove this after adding icons
`;

const StyledInput=styled.input.attrs<styledInputTypes>( 
  props=>({type: props.type ? props.type: "file",
  hidden:true,
  className:'file-upload'})
)``;


export default function ResumeCard (props: propsTypes) {
  const inputRef= React.useRef<any>(null); //!  If used exact datatype, typescript throws an error but previewing in storybook
  const [fileList,setfileList]=React.useState<Array<any>>([]);

  const FileuploadHandler=(e:any)=>{
      const newFile=e.target.files[0];
      if(newFile)
      {
        const Updated=[...fileList,newFile];
        setfileList(Updated);
      }
  };

  return (
    <StyledResumeContainer cardWidth={props.cardWidth} cardminHeight={props.cardminHeight}>

        <Container1>

          <StyledHeading width="auto" height="auto" fontweight={600} fontsize="28px" lineheight="130%" color="#393938">Select the resume you wish to submit</StyledHeading>
          <StyledHeading width="auto" height="auto" fontweight={400} fontsize="18px" lineheight="130%" color="#393938">Click to preview</StyledHeading>

        </Container1>

        <ResumeList>
          {
            fileList.map((item,ind)=>(
              <InnerResume key={ind} number={ind+1}/>
            ))
          }
        </ResumeList>
        
        <ResumeUploader action="#" onClick={()=>inputRef.current && inputRef.current.click()}>

          <StyledInput type="file" ref={inputRef} onChange={FileuploadHandler}/>

          <StyledIcons width="64px" height="64px"/>

          <StyledHeading width="auto" height="auto" fontfamily="Galano Grotesque Alt" fontweight={500} fontsize="20px" lineheight="27px" color="#0E1D25">Upload new resume</StyledHeading>

        </ResumeUploader>

    </StyledResumeContainer>
  );
};

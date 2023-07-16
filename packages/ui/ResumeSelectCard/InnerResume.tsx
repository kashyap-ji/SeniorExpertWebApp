import * as React from "react";
import styled from "styled-components";
// import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined'; //?TODO:Import Icons

interface styledPropTypes{
    backgroundColor?:string,
    textColor?:string;
    width?:string;
    height?:string;
    selected?:boolean;
    fontsize?:string;
    fontfamily?:string;
  }
  
interface propsTypes {
  number: number,
}

const StyledResumeContainer=styled.div<styledPropTypes>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px;
    gap: 5px;
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;
    border: ${(props)=>{
        if(!props.selected)
        {
            return "2px solid #D6E2FD"
        }
        else{
            return "none"
        }
    }};
    background: ${(props)=>props.selected ? "#D6E2FD" : "#FFFFFF"};
    box-shadow: ${(props)=>{
        if(props.selected)
        {
            return "0px 4px 4px rgba(0, 0, 0, 0.25)"
        }
        else{
            return "none"
        }
    }};
    border-radius: 6px;
`;

const StyledRno=styled.span<styledPropTypes>`
    max-width: 195px;
    flex-basis:80%;
    height: 27px;
    margin-right: 100px;
    font-family: ${props => props.fontfamily ? props.fontfamily : "Galano Grotesque Alt"};
    font-style: normal;
    font-weight: 500;
    font-size: ${props => props.fontsize ? props.fontsize : "18px"};
    line-height: 27px;
    color: ${(props)=>props.textColor ? props.textColor : "#0E1D25"};
    
`;

const StyledIcons=styled('i')<styledPropTypes>`
    width:${(props)=>props.width ? props.width : "24px"};
    height:${(props)=>props.height? props.height: "24px"};
    flex-basis:10%;
    background-color:#809de1; //? Feel free to uncomment it according to need
    align-self: center;
    display:${(props)=>props.selected ? "block" :"none"}
`;

export default function InnerResume (props: propsTypes) {
    const[clicked,setclicked]=React.useState<boolean>(false);
    let textColor="#0E1D25";
    return (
        <StyledResumeContainer selected={clicked} onClick={()=>{
            if(clicked)
            { setclicked(false)
            } else setclicked(true)}}>
            <StyledIcons selected={true}/>
            <StyledRno textColor={textColor} fontsize="20px">{`Resume ${props.number}`}</StyledRno>
            <StyledIcons selected={clicked}/>
        </StyledResumeContainer>
    );
};

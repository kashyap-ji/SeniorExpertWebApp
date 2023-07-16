import * as React from "react";
import { ImStarEmpty } from "@react-icons/all-files/im/ImStarEmpty";
import { ImStarFull } from "@react-icons/all-files/im/ImStarFull";
import { ImStarHalf } from "@react-icons/all-files/im/ImStarHalf";
import { IoClose } from "@react-icons/all-files/io5/IoClose";

interface propsTypes {
  name: string,
  backgroundColor?: string,
  width?: string,
  height?: string,
  border_radius?: string,
  padding?:string,
  image_height?:string,
  image_src?:string
  heading_size?:string,
  font_family?:string
  subheading_size?:string,
  position: string,
  _Button: any,
  textarea_backgroundColor?: string,
  textarea_row: number,
}
export default function Rating_Card (props: propsTypes) {
    let backgroundColor = '#ffffff';
    if (props.backgroundColor) {
        backgroundColor = props.backgroundColor;
    }
    let width = '484px';
    if (props.width) {
        width = props.width;
    }
    let height = '584.72px';
    if(props.height){
        height = props.height;
    }
    let border_radius = '24px';
    if(props.border_radius){
        border_radius = props.border_radius;
    }
    let padding='48px';
    if(props.padding){
        padding=props.padding;
    }
    let image_height='104px';
    if(props.image_height){
        image_height=props.image_height;
    }
    let image_src= "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
    if(props.image_src){
        image_src=props.image_src;
    }
    let heading_size='32px';
    if(props.heading_size){
        heading_size=props.heading_size;
    }
    let font_family="inherit";
    if(props.font_family){
        font_family=props.font_family;
    }
    let subheading_size='20px';
    if(props.subheading_size){
        subheading_size=props.subheading_size;
    }
    let textarea_backgroundColor = "#e0e2e3";
    if (props.textarea_backgroundColor) {
        textarea_backgroundColor = props.textarea_backgroundColor;
    }
    let textarea_row = 6;
    if (props.textarea_row) {
        textarea_row = props.textarea_row;
    }
    let [review,setReview]=React.useState("")
    let [rating,setRating]=React.useState(0)
    const handlemessagechange=(e:any)=>{
        setReview(e.target.value)
    }
    let star_list:any[]=[]
    for(var i=0;i<5;i++){
        const t=i;
        star_list.push(<ImStarEmpty size={54.72} style={{marginRight:"3%"}} onClick={()=>{
            if(rating<=t){
                setRating(t+0.5)
            }else if(rating==t+0.5){
                setRating(t+1)
            }else{
                setRating(t)
            }
        }}></ImStarEmpty>)
    }
    for(var i=0;i<5;i++){
        const t=i;
        if(rating-i>=1){
            star_list[t]=<ImStarFull size={54.72} style={{marginRight:"3%"}} onClick={()=>{
                if(rating<=t){
                    setRating(t+0.5)
                }else if(rating==t+0.5 || rating>t+1){
                    setRating(t+1)
                }else{
                    setRating(t)
                }
            }}></ImStarFull>
        }else if(rating-i==0.5){
            star_list[i]=<ImStarHalf size={54.72} style={{marginRight:"3%"}} onClick={()=>{
                if(rating<=t){
                    setRating(t+0.5)
                }else if(rating==t+0.5 || rating>t+1){
                    setRating(t+1)
                }else{
                    setRating(t)
                }
            }}></ImStarHalf>
        }
    }    
    return <div style={{backgroundColor: `${backgroundColor}`,maxWidth:`${width}`,minHeight:`${height}`,borderRadius:`${border_radius}`,padding:`${padding}`,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div style={{flex:1,alignSelf:"center"}}>
                <img src={image_src} style={{borderRadius:"50%",maxHeight:`${image_height}`,maxWidth:`${image_height}`}}/>
            </div>
            <div style={{alignSelf:"center",flex:2,alignItems:"start",display:"flex",flexDirection:"column",maxHeight:`${image_height}`,justifyContent:"space-between"}}>
                <div style={{fontFamily:`${font_family}`,fontSize:`${heading_size}`,fontWeight:"700"}}>{props.name}</div>
                <div style={{fontFamily:`${font_family}`,fontSize:`${subheading_size}`,fontWeight:"700"}}>{props.position}</div>
            </div>
            <div style={{flex:1,textAlign:"right",alignSelf:"flex-start"}}><IoClose size={"32px"}/></div>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <div style={{fontFamily:`${font_family}`,fontWeight:"600",fontSize:`${heading_size}`,marginBottom:"3%"}}>Rate out of 5</div>
            <div style={{display:"flex"}}>
                {star_list}
            </div>
        </div>
        <div style={{ display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
            <div style={{fontFamily:`${font_family}`,fontWeight:"600",fontSize:`${heading_size}`,marginBottom:"2%"}}>Please add a review</div>
            <div>
                <textarea value={review} id="review" name="review" onChange={handlemessagechange} rows={textarea_row} placeholder="Project Title" style={{backgroundColor:`${textarea_backgroundColor}`,borderColor:`${textarea_backgroundColor}`,borderRadius:"6px",width:"100%",resize:"none"}}></textarea>
            </div>

        </div>
        <div style={{alignSelf:"end"}}>
            <button onClick={()=>{}} style={{borderRadius:"50px",height:"87px",width:"270px",backgroundColor:"#0c3598",color:"white",fontSize:"24px",fontWeight:"800"}}>Submit</button>
        </div>
    </div>;
};
import * as React from "react";
import styled, { css } from "styled-components";

interface propsTypes {
    orgainsation?: string,
    title?: string,
    salary?:string,
    location?: string,
    experience?:string,
    type?:string,
    desc_link?:string,
    apply_link?:string,
    credit?: number,
    skills?:string[],
    lastDate?:Date,
    postedOn?:Date,
    logo?:string;
    
  }
interface styledPPropsTypes{
  color?:string;
  size?:string;
  weight?:string;

}
interface styledButtonPropsTypes{
  backgroundColor?:string,
}

const Card=styled.div`
  width:60%;
  border-radius: 16px;
  background-color: #F4F8FF;
`
const Text = styled.p<styledPPropsTypes>`
  
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-weight: ${(props) => (props.weight ? props.weight : "600")};
  margin-block: 0px;
  font-family: inherit;

`
const Button=styled.button<styledButtonPropsTypes>`
  background-color: ${(props) =>props.backgroundColor};
  border-radius: 33px;
  padding: 10px 24px;
  border-width: 0;
`

const credit =require("./credit.svg") as string;
const Logo=styled.img``

var today = new Date(),date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();



export default function JobApplicationCard (props: propsTypes) {
  var Skills=(props.skills?props.skills:['other']).map((skill)=>{
      return (
        <span style={{marginRight:'8px'}}><Button backgroundColor="#D6E2FD"><Text color="#2C292F" weight="400">{skill}</Text></Button></span>
      )
  })
  return (
    <Card>
      <div style={{padding:'24px 24px 16px 24px',display:'flex'}}>
      <div>
      <div style={{paddingBottom:'5px'}}><Text color="#90A9E6">  {props.orgainsation?props.orgainsation:'Organisation name not added'} </Text></div>
      <Text size="24px" > {props.title?props.title:'Job title not added'} </Text>
      </div>
      <Logo src={props.logo}/>
      </div>
      <div style={{padding:'0px 24px 16px 24px',display:'flex',flexWrap:'wrap'}}>
          <div style={{paddingRight:'17px'}}><Text color="#192235" weight="400">{props.salary?props.salary:'Not Disclosed'}</Text></div>
          <div style={{paddingRight:'17px'}} ><Text color="#192235" weight="400">{props.location?props.location:'Not Disclosed'}</Text></div>
          <div style={{paddingRight:'17px'}}><Text color="#192235" weight="400">{props.experience?props.experience:'0 Experience'}</Text></div>
          <div style={{paddingRight:'17px'}}><Text color="#192235" weight="400">{props.type?props.type:'Full-time'}</Text></div>
          <div style={{marginLeft:'auto',paddingRight:'8px'}}><Text color="#3255A9" size="32px">{props.credit?props.credit:'0'}</Text></div>
          <Logo src={credit}/>
          <div style={{flexBasis:'100%',height:'0'}}></div>
          <a href={props.desc_link?props.desc_link:'#'} style={{textDecoration:'none'}}><Text color="#2B67F6" weight="400"> View Description </Text></a>
      </div>
      <div style={{padding:'24px 24px 16px 24px'}}>
          <Text>Skills required</Text>
          <div style={{display:'flex'}}>
            <div style={{marginTop:'4px'}}>{Skills}</div>
            <a href={props.apply_link?props.apply_link:'#'} style={{textDecoration:'none',marginLeft:'auto'}}><Button backgroundColor="#3255A9"><Text color="#fff"> Apply Now</Text></Button></a>
          </div>
      </div>
      <div style={{padding:'8px 24px 8px 24px',display:'flex',flexWrap:'wrap',borderTop:'1px solid #C1D1F9'}}>
        <div style={{paddingRight:'17px'}}><Text color="#192235" weight="400">Posted on: {props.postedOn?props.postedOn:date}</Text></div>
        <div style={{paddingRight:'17px'}} ><Text color="#192235" weight="400">Last date to apply: {props.lastDate?props.lastDate:'Not Disclosed'}</Text></div>
      </div>
    </Card>
  )
};
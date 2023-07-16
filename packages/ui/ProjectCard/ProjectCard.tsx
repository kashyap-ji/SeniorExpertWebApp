import * as React from "react";
import styled from "styled-components";

interface styledpropsTypes{
    height?:string;
    width?:string;
    border_radius?:string; 
    border_width?:string;
    padding?:string;
    bg_color?:string;
}
interface componentpropsTypes extends styledpropsTypes{
    ProjectName:string;
    Name:string;
    details:string;
    location:string;
    startdate:string;
    enddate:string;

}
const Card = styled("div")<styledpropsTypes>`
    --height: ${(props)=>
       props.height ? props.height: "fit-content"};
    --width: ${(props)=>
        props.width ? props.width: "362px"};
    --border_radius: ${(props)=>
        props.border_radius ? props.border_radius: "16px"};
    --padding: ${(props)=>
        props.padding? props.padding: "28px"};
    --border_width:${(props)=>
        props.border_width ? props.border_width: "1px"};
    --bg_color:${(props)=>
        props.bg_color ? props.bg_color: "#EDF2FB"};


    display:flex;
    gap: 24px;
    flex-direction:column;
    justify-content:space-between;
    box-sizing:border-box;
    border-style:solid;
    border-color:#D6E2FD;
    
    background-color:var(--bg_color);
    border-width:var(--border_width);
    height: var(--height);
    width: var(--width);
    border-radius: var(--border_radius);
    padding:var(--padding);
 `;
interface styledtext{
    weight:number;
    color?:string;
    sm?:boolean;
}
const Text=styled.div<styledtext>`
    --font-weight:${(props)=>props.weight};
    --color:${(props)=>props.color ? props.color:"#192030"};
    --size:${(props)=>props.sm? "16px":"20px"};

    line-height:129%;
    color:var(--color);
    font-family:inherit;
    font-weight:var(--font-weight);
    font-size:var(--size);
`;
const FlexB=styled.div`
    display:flex;
    justify-content:space-between;
`;

export default function ProjectCard (props: componentpropsTypes){
    return(
        <Card height={props.height} width={props.width} padding={props.padding} 
        border_radius={props.border_radius} border_width={props.border_width} bg_color={props.bg_color}>
            <div>
                <Text weight={800} >{props.ProjectName}</Text>
                <Text weight={600} color={"#34405B"}>{props.Name}</Text>
                <br />
                <Text weight={400} color={"#34405B"}>{props.details}</Text>
            </div>
            <FlexB>
                <Text weight={600} color={"#34405B"} sm>{props.location}</Text>
                <Text weight={700} sm>{props.startdate}-{props.startdate}</Text>
            </FlexB>
        </Card>
    );
};
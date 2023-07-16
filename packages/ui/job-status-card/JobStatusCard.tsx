import * as React from "react";
import styled from "styled-components";
//import { RiSpotifyFill } from "@react-icons/all-files/ri/RiSpotifyFill";

interface JobStatusProps{
    company?: string;
    companylogo?: string;
    position?: string;
    Status: "Accepted" | "Pending" | "Bookmarked" | "Rejected";
}

interface JSCstyleprops extends JobStatusProps{
    height?: string;
    width?: string;
    borderTop?: string;
    borderRadius?: string;
    borderWidth?: string;
    padding?: string;
}

const JScard = styled("div")<JSCstyleprops>`
    --height: ${(props) => props.height || "fit-content" };
    --width:  ${(props) => props.width || "411px" };
    --borderRadius: ${(props) => props.borderRadius || "8px"};
    --borderTop:  ${(props) => props.borderTop || "2px solid"};
    --borderTopColor: ${(props) => props.Status==="Accepted"? "#5FC92E" : (props.Status==="Bookmarked"?"#2561ED":(props.Status==="Pending"?"#FFAD0D":"#FF3236"))};
    --padding: ${(props) => props.padding || "24px"};

    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-top: var(--borderTop);
    border-top-color:var(--borderTopColor);
    background-color: #FFFFFF;
    justify-content: space-between;
    border-top-width:var(--borderWidth);
    border-radius: var(--borderRadius);
    padding: var(--padding);
    width: var(--width);
    height: var(--height);
`;

interface StyleText{
    weight: number;
    color?: string;
    size?: string;
    lineheight: string;
    fontfamily?: string;
}

const Text = styled.div<StyleText>`
    --font-weight:${(props) =>props.weight};
    --lineheight: ${(props) => props.lineheight};
    --color: ${(props) => props.color || "#192030"};
    --size:${(props) => props.size};
    //--fontfamily:${(props) => "inherit"};
    color:var(--color);
    font-style:normal;
    line-height:var(--lineheight);
    font-family:inherit; //var(--fontfamily);
    font-weight:var(--font-weight);
    font-size:var(--size);
`;

export default function JobStatusCard (props:JobStatusProps){
return(
    <JScard Status = {props.Status}>
        <div>
        <Text size="16px" weight={600} lineheight="20.72px" color="#3A4662">{props.company}</Text>
        <Text size="24px" weight={600} lineheight="31.08px" color="#0E1D25">{props.position}</Text>
        <br/>
        <Text size="12px" weight={400} lineheight="16.2px" color="#2C292F">{props.Status}</Text>
        </div>
        <div><img src={props.companylogo} style={{ width:43.03, height:43.03 }}></img></div>
    </JScard>
);
};



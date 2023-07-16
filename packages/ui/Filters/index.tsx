import styled from "styled-components";
import Filter from "./index2";

interface propsTypes {
    heading: string,
    color1?: string,
    color2?: string,
    fieldInfo: Array<{ id:string, fieldName:string, options:string[]}>
}
interface styleTitle {
    color1?: string
    color2?: string
}

const Title = styled("div")<styleTitle>`
    color: ${(props) => props.color1 || "#0C3597"};
    font-weight: bold;
    hr {
        background-color: ${(props) => props.color2 || "#D6E2FD"};
    }
`;

export default function Filters (props:propsTypes) {
    return(
        <div className="filter">
            <Title color1={props.color1} color2={props.color2}>
                <h2>{props.heading}</h2>
                <hr />
            </Title>
           
            {props.fieldInfo.map(field => 
                <div>
				    <Filter fieldName={field.fieldName} options={field.options} id={field.id} color1={props.color1?props.color1:"#0C3597"} color2={props.color2?props.color2:"#D6E2FD"}/>
                    <Title color1={props.color1} color2={props.color2}>
                        <hr />
                    </Title>
                </div>
            )}
        </div>
    )
}
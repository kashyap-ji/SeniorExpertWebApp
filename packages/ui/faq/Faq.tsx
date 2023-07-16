import {Wrapper} from "./FaqStyled/Faq.styled"
import arrow from "./assets/arrow"
interface propsTypes {
    question:string,
    heading:string,
    para:string,
    bg ?:string,
    id :string,
    textColor ?: string
}
export default function Faq (props:propsTypes){
    return(
        <Wrapper bg={props.bg?props.bg:"white"} textColor={props.textColor?props.textColor:"black"} label={props.id?props.id:"NoLabel"}>
        <div className="collapsible">
            <input type="checkbox" id={props.id} />
            <label htmlFor={props.id}>
            {props.question?props.question:"No Question defined"}
            {arrow}
            </label>
            <div className="collapsible-text">
                <h2>{props.heading?props.heading:"No Heading defined"}</h2>
                <p>{props.para?props.para:"No Para defined"}</p>
            </div>
        </div>
        </Wrapper>
    )
}
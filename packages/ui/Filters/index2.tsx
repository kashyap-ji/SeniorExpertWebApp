import {Wrapper} from "./Filters.styled";

interface propsTypes {
    fieldName:string,
    options:string[],
    id:string,
	color1?:string,
	color2?:string
}

const Filter = (props:propsTypes) => {
	return(
		
        <Wrapper label={props.id?props.id:"NoLabel"} color1={props.color1?props.color1:"#0C3597"} color2={props.color2?props.color2:"#D6E2FD"}>
        	<div className="collapsible">

				<input type="checkbox" id={props.id} />
				<label htmlFor={props.id}>
					<span>{props.fieldName?props.fieldName:""}</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="200" width="200" className="arrow"> <g> 
						<path fill="none" d="M0 0h24v24H0z" id="mainIconPathAttribute"></path> <path d="M12 14l-4-4h8z" id="mainIconPathAttribute"></path> </g> 
					</svg>
				</label>

				<div className="collapsible-text">
					{props.options.map(option => 
						<div>
							<input type="checkbox"/>
					  		<label>{option}</label>
						</div>
					)} 
				</div>
        	</div>
        </Wrapper>
    )
}

export default Filter;
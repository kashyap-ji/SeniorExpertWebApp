import styled from "styled-components"
interface propsTypes {
label:string,
color1?: string,
color2?: string
}
export const Wrapper = styled.div<propsTypes>`

background-color: var(--backgroundColor);
font-family: inherit;
display: flex;
justify-content: left;
background-color: transparent;
border-radius: 4px;

.collapsible{
    color: ${(props) => props.color1 || "#0C3597"};
    max-width: 90%;
    overflow: hidden;
    font-weight: 500;
    input{
        display: none;
    }
    label{
        position: relative;
        font-weight: 500;
        background:#fff;
        display: flex;
        margin-bottom:2px;
        cursor: pointer;
        padding: 0.2px;
        border-radius: 4px;
        z-index: 1;
        .arrow{
            content: "A";
            justify-content: right;
            //position: relative;
            right: 15px;
            top: 15px;
            width: 18px;
            height: 18px;
            transition: all 0.3s ease;
        }
    }
    .collapsible-text{
        max-height: 1px;
        overflow: hidden;
        border-radius: 4px;
        line-height: 1.5;
        position: relative;
        top: -100%;
        opacity: 0.5;
        transition: all 0.3s ease;
    }
    & input:checked ~ .collapsible-text{
        
        color: black;
        max-height: 400px;
        width: 100px;
        background: white;
        opacity: 1;
        top: 0;
        input {
            border-color: ${(props) => props.color2 || "#D6E2FD"};
            display: inline;
        }
        label {
            display: inline;
            font-weight: 100;
        }
    }
}
`
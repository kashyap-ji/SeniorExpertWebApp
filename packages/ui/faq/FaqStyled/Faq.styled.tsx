import styled from "styled-components"
interface propsTypes {
bg?:string,
label?:string,
textColor?:string
}
export const Wrapper = styled.div<propsTypes>`
--backgroundColor:${(props)=>props.bg?props.bg:"white" };
--textColor:${(props)=>props.textColor?props.textColor:"black" };
font-family: inherit;
display: flex;
justify-content: center;
background-color: transparent;
border-radius: 4px;
.collapsible{
    max-width: 90%;
    overflow: hidden;
    font-weight: 500;
    color: var(--textColor);
    input{
        display: none;
    }
    label{
        box-sizing: border-box;
        position: relative;
        font-weight: 600;
        background:var(--backgroundColor);
        display: block;
        cursor: pointer;
        padding: 15px;
        border-radius: 6px;
        z-index: 1;
        .arrow{
            position: absolute;
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
        max-height: 400px;
        background:var(--backgroundColor);
     margin: 10px 0px;
        opacity: 1;
        top: 0;
        h2{
            margin-bottom: 10px;
            padding: 0 15px;
        }
        p{
            padding-left: 15px;
            padding-right: 15px;
        }
    }
}

`
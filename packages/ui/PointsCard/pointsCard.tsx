import * as React from "react";
import styled from "styled-components";
interface propsTypes {
  numberOfApplications: number;
  credits: number;
  rate: number;
  backgroundColor?: string;
  textColor?: string;
  creditColor?: string;
  buttonColor?: string;
  height?: number;
  width?: number;
  cardBorderRadius?: number;
  buttonTextColor?: string;
  isBestSeller?: boolean;
  percentageDiscount?: number;
  discountBackgroundColor?: string;
  discountTextColor?: string;
  bestSellerBackgroundColor?: string;
  bestSellerTextColor?: string;
  fontsizeDiscountArea?: number;
  fontSizeApplications?: number;
  fontSizeCredits?: number;
  fontSizeRate?: number;

}
interface styledPropsForCredits {
  text_color?: string;
  font_size?: number;
}
interface styledPropsForWrapper {
  background_color?: string;
  text_color?: string;
  font_size?: number;
  height?: number;
  width?: number;
  border_radius?: number;

}
interface styledPropsForButton {
  background_color?: string;
  button_text_color?: string;
}
interface styledPropsForInfo {
    background_color_bestSeller?: string;
    text_color_bestSeller?: string;
    background_color_discount?: string;
    text_color_discount?: string;
    font_size?: number;
}
interface styledPropsForRate {
    text_color?: string;
    font_size?: number;
}
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Wrapper = styled.div<styledPropsForWrapper>`
  display: flex;
  height: ${({ height }) => height ? `${height}px` : "100px"};
  width: ${({ width }) => width ? `${width}px` : "auto"};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  font-family: inherit;
  background: ${({ background_color }) => background_color || "#EDF2FB"}};
  border: 2px solid #ffffff;
  border-radius: ${({ border_radius }) => border_radius || 16}px};
`;
const Applications = styled.div<styledPropsForWrapper>`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ font_size }) => font_size || 23}px;
  gap:0.8rem;
  color: ${({ text_color }) => text_color || "#02277D"}};
  font-stretch: 127;
`;
const InfoArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5.3rem;
`;
const Credits = styled.div<styledPropsForCredits>`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  font-weight: 500;
  font-size: ${({ font_size }) => font_size || 27}px;
  line-height: 129.5%;
  color: ${({ text_color }) => text_color || "#02277D"};
  font-stretch: 127;
  span {
    font-weight: 900;
  }
`;
const Rate = styled.div<styledPropsForRate>`
  color: ${({ text_color }) => text_color || "#526185"};
  font-weight: 500;
  span {
    color: ${({ text_color }) => text_color || "#34405b"};
    font-weight: 900;
    font-size: ${({ font_size }) => font_size || 23}px;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;
const Button = styled.button<styledPropsForButton>`
  padding: 16px 48px;
  width: 185px;
  height: 58px;
  background: ${({ background_color }) => background_color || "#02277D"};
  border-radius: 43px;
  div {
    width: 89px;
    height: 26px;
    font-weight: 600;
    font-size: 20px;
    line-height: 129.5%;
    color: ${({ button_text_color }) => button_text_color || "#FFFFFF"};
    font-stretch: 127;
  }
`;
export default function PointsCard(props: propsTypes) {
  let Info = styled.div<styledPropsForInfo>`
    display: none;
  `;
  if (props.isBestSeller && props.percentageDiscount) {
    Info = styled.div<styledPropsForInfo>`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 16px;
      overflow: hidden;
      font-weight: 500;
      font-size: ${({font_size}) => font_size || 16}px;
      line-height: 129.5%;
      font-stretch: 127;
      > *{
        &: first-child {
            display: flex;
            color: ${({ text_color_discount }) => text_color_discount || "#000000"};
            justify-content: center;
            width:100%;
            background: ${({ background_color_discount }) => background_color_discount || "#90A9E6"};
          }
        &: last-child {
            color: ${({ text_color_bestSeller }) => text_color_bestSeller || "#FFFFFF"};
            display: flex;
            width:100%;
            justify-content: center;
            background: ${({ background_color_bestSeller }) => background_color_bestSeller || "#1B4ACB"};
        }
      }
      
    `;
  }
  else if(props.isBestSeller){
    Info = styled.div<styledPropsForInfo>`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 16px;
      width: 50%;
      overflow: hidden;
      font-weight: 500;
      font-size: ${({font_size}) => font_size || 16}px;
      line-height: 129.5%;
      font-stretch: 127;
      > *{
        &: first-child {
            display: none;
          }
        &: last-child {
            color: ${({ text_color_bestSeller }) => text_color_bestSeller || "#FFFFFF"};
            display: flex;
            width:100%;
            justify-content: center;
            background: ${({ background_color_bestSeller }) => background_color_bestSeller || "#1B4ACB"};
        }
      }
      
    `;
  }
  else if(props.percentageDiscount){
    Info = styled.div<styledPropsForInfo>`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 16px;
      width: 50%;
      overflow: hidden;
      font-weight: 500;
      font-size: ${({font_size}) => font_size || 16}px;
      line-height: 129.5%;
      font-stretch: 127;
      > *{
        &: first-child {
            display: flex;
            color: ${({ text_color_discount }) => text_color_discount || "#000000"};
            justify-content: center;
            width:100%;
            background: ${({ background_color_discount }) => background_color_discount || "#90A9E6"};
          }
        &: last-child {
            display: none;
        }
      }
      
    `;}
  return (
    <Wrapper 
      background_color={props.backgroundColor}
      height={props.height}
      width={props.width}
      border_radius={props.cardBorderRadius}>
    <Div>
      <Applications text_color={props.textColor} >
        <div>About {props.numberOfApplications} applications</div>
        <Info
         background_color_bestSeller={props.bestSellerBackgroundColor}
         background_color_discount = {props.discountBackgroundColor}
         text_color_bestSeller = {props.bestSellerTextColor}
         text_color_discount = {props.discountTextColor} 
         font_size = {props.fontsizeDiscountArea}>
            <div>{props.percentageDiscount}% OFF</div>
            <div>Best seller</div>
        </Info>
      </Applications>
      <InfoArea>
        <Credits text_color={props.creditColor}>
          <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.5641 31.026C37.5708 28.2918 38.8818 25.0153 39.2364 21.4572H0.43042C0.785025 25.0153 2.09607 28.2918 4.10276 31.026H35.5641ZM31.7447 34.9405H7.92211C11.2166 37.4857 15.3482 39 19.8334 39C24.3187 39 28.4502 37.4857 31.7447 34.9405ZM0.430422 17.5427H39.2364C38.8818 13.9846 37.5708 10.7081 35.5641 7.97402H4.10278C2.09609 10.7081 0.785031 13.9846 0.430422 17.5427ZM31.7447 4.05952C28.4502 1.5143 24.3186 0 19.8334 0C15.3482 0 11.2166 1.5143 7.92214 4.05952H31.7447Z"
              fill={props.creditColor ? props.creditColor : "#02277D"}
            />
          </svg>
          <div>
            <span>{props.credits}</span> Credits
          </div>
        </Credits>
        <Rate text_color={props.creditColor} font_size={props.fontSizeRate}>
          <div>
            <span>₹{props.rate}</span> &nbsp;ex. GST
          </div>
          <div>₹{(props.rate / props.credits).toFixed(2)}/credit</div>
        </Rate>
        <Button
          background_color={props.buttonColor}
          button_text_color={props.buttonTextColor}
        >
          <div>Buy Now</div>
        </Button>
      </InfoArea>
      </Div>
    </Wrapper>
    
  );
}

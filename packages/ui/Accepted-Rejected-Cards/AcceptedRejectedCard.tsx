import styled from "styled-components";

interface propsTypes {
	heading: string;
	description: string;
	iconColor: string;
	font1: string;
	font2: string;
	width?: string;
	border?: string;
	borderRadius?: string;
	backgroundColor?: string;
}
export default function AcceptedRejectedCard(props: propsTypes) {
	let backgroundColor = props.backgroundColor
		? props.backgroundColor
		: "#FFFFFF";
	let width = props.width ? props.width : "1200px";
	let border = props.border ? props.border : "0px";
	let borderRadius = props.borderRadius ? props.borderRadius : "16px";
	
	const Card = styled.div`
		background-color: ${backgroundColor};
		width: ${width};
		border-radius: ${borderRadius};
		border: ${border};
		display: flex;
		flex-direction: row;
		gap: 32px;
		padding: 32px;
		align-items: flex-start;
	`;
	const TextContainer = styled.div`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
	`;
	const Heading = styled.span`
		font-weight: 600;
		font-family: ${props.font1};
		font-size: 20px;
		color: #192030;
		line-height: 129.5%;
		font-stretch: 127;
	`;
	const Desc = styled.span`
		font-family: ${props.font2};
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 22px;
		color: #2c292f;
	`;
	return (
		<Card>
			{/* Icon Substitute */}
			<div>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/OOjs_UI_icon_notice-warning.svg/1200px-OOjs_UI_icon_notice-warning.svg.png"
					alt="Error Icon"
					height="42px"
					width="42px"
				/>
			</div>
			{/* With icon, but react icons not supported
			<IconContext.Provider
				value={{ color: props.iconColor, fontSize: "42px" }}
			>
				<div>
					<MdError />
				</div>
			</IconContext.Provider> */}

			<TextContainer>
				<Heading>{props.heading}</Heading>
				<Desc>{props.description}</Desc>
			</TextContainer>
		</Card>
	);
}

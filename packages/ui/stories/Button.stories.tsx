import Button from "../Button/Button";

export default {
  title: "Buttons",
  component: Button,
};

const Template = (args: any) => <Button {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  text: "Default",
};
export const DefaultOutlined: any = Template.bind({});
DefaultOutlined.args = {
  text: "Default Outlined",
  variant: "outlined",
};
export const DefaultFilledColor: any = Template.bind({});
DefaultFilledColor.args = {
  text: "Send Message",
  backgroundColor: "#3E5FAE",
};
export const DefaultFilledColorBorder: any = Template.bind({});
DefaultFilledColorBorder.args = {
  text: "Colorss!",
  backgroundColor: "#6ECCAF",
  borderColor: "#fff",
  textColor: "#fff",
};
export const DefaultFontNormal: any = Template.bind({});
DefaultFontNormal.args = {
  text: "Send Message",
  fontWeight: 500,
};
export const DefaultFontBold: any = Template.bind({});
DefaultFontBold.args = {
  text: "Send Message",
  fontWeight: 700,
};
export const DefaultFontLight: any = Template.bind({});
DefaultFontLight.args = {
  text: "Send Message",
  fontWeight: 300,
};

export const NoRadius: any = Template.bind({});
NoRadius.args = {
  text: "Default",
  borderRadius: "none",
};
export const NoRadiusFilledBlack: any = Template.bind({});
NoRadiusFilledBlack.args = {
  text: "Default",
  borderRadius: "none",
  variant: "filled",
  backgroundColor: "#222222",
  borderColor: "#222222",
  textColor: "#fff",
};
export const NoRadiusFilledWhite: any = Template.bind({});
NoRadiusFilledWhite.args = {
  text: "Default",
  borderRadius: "none",
  variant: "filled",
  backgroundColor: "#fff",
  borderColor: "#fff",
  textColor: "#000",
};
export const NoRadiusOutlined: any = Template.bind({});
NoRadiusOutlined.args = {
  text: "Default",
  variant: "outlined",
  borderRadius: "none",
};

export const FilledSmall: any = Template.bind({});
FilledSmall.args = {
  text: "Filled Button",
  variant: "filled",
  size: "sm",
};
export const SmallOutlined: any = Template.bind({});
SmallOutlined.args = {
  text: "Button",
  variant: "outlined",
  size: "sm",
};

export const FilledMedium: any = Template.bind({});
FilledMedium.args = {
  text: "Filled Button",
  variant: "filled",
  size: "md",
};
export const MediumOutlined: any = Template.bind({});
MediumOutlined.args = {
  text: "Oulined Button",
  variant: "outlined",
  size: "md",
};

export const FilledLarge: any = Template.bind({});
FilledLarge.args = {
  text: "Filled Button",
  variant: "filled",
  size: "lg",
};
export const LargeOutlined: any = Template.bind({});
LargeOutlined.args = {
  text: "Outlined Button",
  variant: "outlined",
  size: "lg",
};

export const FilledExtraLarge: any = Template.bind({});
FilledExtraLarge.args = {
  text: "Filled Button",
  variant: "filled",
  size: "xl",
};
export const ExtraLargeOutlined: any = Template.bind({});
ExtraLargeOutlined.args = {
  text: "Button",
  variant: "outlined",
  size: "xl",
};

export const FilledCurvedLeft: any = Template.bind({});
FilledCurvedLeft.args = {
  text: "Curveeee",
  variant: "filled",
  borderRadiusFor: "left",
  size: "md",
};
export const FilledCurvedRight: any = Template.bind({});
FilledCurvedRight.args = {
  text: "Curveeee",
  variant: "filled",
  borderRadiusFor: "right",
  size: "md",
};
export const CurvedLeftOutlined: any = Template.bind({});
CurvedLeftOutlined.args = {
  text: "Curveeee",
  variant: "outlined",
  borderRadiusFor: "left",
  size: "md",
};
export const CurvedRightOutlined: any = Template.bind({});
CurvedRightOutlined.args = {
  text: "Curveeee",
  variant: "outlined",
  borderRadiusFor: "right",
  size: "md",
};

export const FixedWidthButton: any = Template.bind({});
FixedWidthButton.args = {
  text: "Fixed Width",
  variant: "filled",
  width: "330px",
  size: "md",
};
export const FixedWidthOutlinedButton: any = Template.bind({});
FixedWidthOutlinedButton.args = {
  text: "Fixed Width Outlined",
  variant: "outlined",
  width: "330px",
  size: "md",
};
export const TestIcon: any = Template.bind({});
TestIcon.args = {
  text: "Icons",
  borderRadius: "none",
  variant: "filled",
  backgroundColor: "#222",
  borderColor: "#222",
  textColor: "#fff",
  icon: "❤️"
};
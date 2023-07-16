import * as React from "react";

// 1st method (Directly typing types)
// export const Button = (props: { label: string, backgroundColor?: string, size?: string }) => {
//   return <button>Boop</button>;
// };

// 2nd method (Creating a interface for the types)
// ! RECOMMENDED WAY (More readability)
interface propsTypes {
  label: string,
  backgroundColor?: string,
}
export default function Button (props: propsTypes) {
  let backgroundColor = '#00E7FF';
  if (props.backgroundColor) {
    backgroundColor = props.backgroundColor
  }
  return <button style={{ backgroundColor: `${backgroundColor}`,  }}>{props.label}</button>;
};

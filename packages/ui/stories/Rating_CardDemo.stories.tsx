import Button from "../Button";
import Rating_Card from "../Rating_Card/Rating_Card";
export default {
    title: "Rating_Card",
    component: Rating_Card,
}

export const Card = () => <Rating_Card name="Gunjan Dhanuka" position="Product Designer" _Button={<Button label="Press Me"/>}/>
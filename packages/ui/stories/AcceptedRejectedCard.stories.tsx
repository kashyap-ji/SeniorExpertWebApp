import AcceptedRejectedCard from "../Accepted-Rejected-Cards/AcceptedRejectedCard";

export default {
	title: "AcceptedRejectedCard",
	component: AcceptedRejectedCard,
};

export const Accepted = () => (
	<AcceptedRejectedCard
		heading="Accepted!"
		backgroundColor="#FFFFFF"
		iconColor="green"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit imperdiet volutpat ac sapien maecenas id. A amet, laoreet tincidunt hendrerit est"
		border="3px solid #3255A9"
		font1="Trebuchet MS"
		font2="Comic Sans MS"
	/>
);
export const Rejected = () => (
	<AcceptedRejectedCard
		heading="Rejected"
		backgroundColor="aquamarine"
		iconColor="yellow"
		description="Something here"
		font1="Garamond"
		font2="Trebuchet MS"
	/>
);

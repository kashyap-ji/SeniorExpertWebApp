import PointsCard from "../PointsCard/pointsCard";

let story ={
    title: "pointsCard",
    component: PointsCard,
}
export default story;
export const Primary = () => <PointsCard numberOfApplications={20} credits={100} rate={400}/>
export const DarkThemed = () => <PointsCard 
                                    numberOfApplications={20} 
                                    credits={100} 
                                    rate={400} 
                                    creditColor="#000000" 
                                    backgroundColor="#F5F5F5"
                                    textColor="#000000"
                                    buttonColor="#000000"
                                    buttonTextColor="#F5F5F5"/>
export const HighContrast = () => <PointsCard
                                    numberOfApplications={20}
                                    credits={100}
                                    rate={400}
                                    creditColor="#FF0000"
                                    backgroundColor="#000000"
                                    textColor="#FF0000"
                                    buttonColor="#FF0000"
                                    buttonTextColor="#000000"/>
export const BestSeller_And_Discount = () => <PointsCard
                                    numberOfApplications={20}
                                    credits={100}
                                    rate={400}
                                    percentageDiscount={30}
                                    isBestSeller = {true}/>

export const Only_BestSeller = () => <PointsCard
                                    numberOfApplications={20}
                                    credits={100}
                                    rate={400}
                                    isBestSeller = {true}/>
export const Only_Discount = () => <PointsCard
                                    numberOfApplications={20}
                                    credits={100}
                                    rate={400}
                                    percentageDiscount={30}/>
                                                                        

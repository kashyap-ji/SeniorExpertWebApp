import Filters from "../Filters";

export default {
    title: "Filters",
    component: Filters
}


export const First = () => <Filters 
heading="Filter1" color1="green" color2="yellow"
fieldInfo={[{id:"1",fieldName:"Location",options:["first","second","third"]},
{id:"2",fieldName:"Required Experience",options:["10-15 years","15-20 years","20-30 years"]}]}></Filters>

export const Second = () => <Filters
heading="Filter2" 
fieldInfo={[{id:"1",fieldName:"Location",options:["first","second","third"]},
{id:"2",fieldName:"Required Experience",options:["10-15 years","15-20 years","20-30 years"]},
{id:"3",fieldName:"Category",options:["option 1","option 2","option 3"]}]}></Filters>
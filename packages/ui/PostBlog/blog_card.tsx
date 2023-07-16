import { useState } from 'react'

interface propsTypes {
    name: string,
    backgroundColor?: string,
    width?: string,
    height?: string,
    border_radius?: string,
    padding?: string,
    image_height?: string,
    image_src?: string
    heading_size?: string,
    font_family?: string,
    subheading_size?: string,
    position: string,
    _Button?: any,
    textarea_backgroundColor?: string,
    textarea_row?: number,
    heading_1?: string,
    heading_2?: string,
    heading_3?: string,
    sub_1?: string,
    sub_2?: string,
    sub_3?: string,
    sidehead_1?: string,
    sidehead_2?: string,
    inputsize_1?: string,
    inputsize_2?: string,
    positionsize?: string,
    inputwidth?: string,
    btn1color?:string,
    btnradius?:string,
    btn2color?:string,
    btn1_text?:string,
    btn2_text?:string,
    btn3_text?:string,
    btn4_text?:string,


}

export default function blog_card(props: propsTypes) {
    
    const [tags, setTags] = useState([])
    function handleKeyDown(e) {
        if (e.key !== 'Enter') return;
        var value = e.target.value;
        if (!value.trim()) return;
        setTags([...tags, value]),
            e.target.value = '';

        if(e.target.value.length>>5) return;

    }

    function removeTag(index){
   setTags(tags.filter((el,i)=>i !== index))
    }



    let  backgroundColor=props.backgroundColor?  props.backgroundColor:'#E1E2E3';
   
    let width=props.width? props.width :'54vw';
    
    let height=props.height? props.height :'100vw';
   
    let border_radius=props.border_radius? props.border_radius :'2rem';
  
    let image_height=props.image_height? props.image_height :'6%';

    let image_src=props.image_src?  props.image_src :'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg';
    

    let heading_size=props.heading_size? props.heading_size  :'2.4vw';
    

    let font_family=props.font_family? props.font_family : 'monstreat';
  


    let heading_1=props.heading_1? props.heading_1 :"Please add Blog Title"
   

    let heading_2=props.heading_2? props.heading_2 : 'Blog Content'
  
    let heading_3=props.heading_3? props.heading_3 : 'Add Tags'
    

    let sub_1=props.sub_1? props.sub_1 : 'Blog Title'
   


    let  sub_2=props.sub_2?props.sub_2 : 'Project Title'
    
    let sub_3=props.sub_3? props.sub_3 :'Search Tags'
    

    let sidehead_1=props.sidehead_1? props.sidehead_1 :'Max Words:15000'
    

    let sidehead_2=props.sidehead_2? props.sidehead_2 :'Max Tags:5'
    

    let inputsize_1=props.inputsize_1? props.inputsize_1 :'4%'
    

    let inputsize_2=props.inputsize_2? props.inputsize_2 : '34%'
    

    let positionsize=props.positionsize? props.positionsize :'1.5vw'
    
    let inputwidth=props.inputwidth? props.inputwidth : '87%'
    
    let btnradius=props.btnradius? props.btnradius:'46px'

    let btn1color=props.btn1color? props.btn1color:'#C1D1F9'
    
   let btn2color=props.btn2color? props.btn2color:'#0C3597'
    
   let btn1_text=props.btn1_text? props.btn1_text:'Mumbai'

   let btn2_text=props.btn2_text? props.btn2_text:'Delhi'

   let btn3_text=props.btn3_text? props.btn3_text:'Hyderabad'

   let btn4_text=props.btn4_text? props.btn4_text:'Submit'






    return (




        <div style={{ width: `${width}`, height: `${height}`, borderRadius: `${border_radius}`, marginTop: "1rem", boxShadow: "2px 2px 2px 2px grey", position: "relative", marginLeft: "2rem" }}>
            <img src={image_src} alt="" style={{ position: "absolute", borderRadius: "5rem", height: `${image_height}`, top: "6%", left: "6%" }} />
            <h1 style={{ position: "absolute", left: "19%", top: "5%", fontFamily: `${font_family}`, fontSize: `${heading_size}` }}>{props.name}</h1>
            <h2 style={{ position: 'absolute', left: "20%", top: "8.5%", opacity: "0.6", fontFamily: `${font_family}`, fontSize: `${positionsize}` }}>{props.position}</h2>


            <h3 style={{ position: "absolute", top: "15%", left: "5.5%", fontFamily: `${font_family}`, display: "inline-block", fontSize: "1.7vw" }}>{heading_1}</h3>
            <input style={{ height: `${inputsize_1}`, width: `${inputwidth}`, display: "grid", position: "absolute", top: "20%", left: "5%", backgroundColor: `${backgroundColor}`, border: "none", paddingLeft: "1vw", fontSize: "1.4vw" }} placeholder={sub_1} />

            <h3 style={{ position: "absolute", top: "27%", display: "inline_block", left: "5.5%", fontSize: "1.7vw" }}>{heading_2}</h3>
            <h4 style={{ position: "absolute", top: "27%", left: "74%", fontSize: "1.3vw" }}>{sidehead_1}</h4>

            <input style={{ height: `${inputsize_2}`, display: "grid", position: "absolute", top: "32%", left: "5%", width: `${inputwidth}`, backgroundColor: `${backgroundColor}`, border: "none", paddingLeft: "1vw", fontSize: "1.4vw", }} placeholder={sub_2} />

            <h3 style={{ position: "absolute", top: "67.5%", display: "inline_block", left: "5.5%", fontSize: "1.7vw" }}>{heading_3}</h3>
            <h4 style={{ position: "absolute", top: "67.5%", left: "79%", fontSize: "1.3vw" }}>{sidehead_2}</h4>

            <input onKeyDown={handleKeyDown} style={{ height: `${inputsize_1}`, display: "grid", position: "absolute", top: "72%", left: "5%", width: `${inputwidth}`, backgroundColor: `${backgroundColor}`, border: "none", paddingLeft: "1vw", fontSize: "1.4vw" }} placeholder={sub_3} />


            {/* <div onKeyDown={handleKeyDown} style={{ height: `${inputsize_1}`, display: "grid", position: "absolute", top: "72%", left: "5%", width: `${inputwidth}`, backgroundColor: `${backgroundColor}`, border: "none", paddingLeft: "1vw", fontSize: "1.4vw"  }} ></div> */}


            {tags.map((tag, index) => (
                    <button key={index} onClick={()=>removeTag(index)} style={{ borderRadius: `${btnradius}`, top: "80%", height: "3.7%", width: "15%", marginTop:"78vw",marginLeft:"2vw", backgroundColor: `${btn1color}`, fontSize: "1.2vw", }}>
               
            { tag }</button>
               
            
    ))
}

{/* <button style={{ borderRadius: `${btnradius}`, position: "absolute", top: "80%", height: "3.7%", width: "20%", left: "5%", backgroundColor: `${btn1color}`, fontSize: "1.2vw" }}>{btn1_text}</button> */ }
{/* <button style={{ borderRadius: `${btnradius}`, position: "absolute", top: "80%", height: "3.7%", width: "20%", left: "27%", backgroundColor: `${btn1color}`, fontSize: "1.2vw" }}>{btn2_text}</button>
            <button style={{ borderRadius: `${btnradius}`, position: "absolute", top: "80%", height: "3.7%", width: "20%", left: "49%", backgroundColor: `${btn1color}`, fontSize: "1.2vw" }}>{btn3_text}</button> */}

<button style={{ borderRadius: `${btnradius}`, position: "absolute", top: "86%", height: "4.5%", width: "24%", left: "70%", backgroundColor: `${btn2color}` }}><strong style={{ color: "white", fontSize: "1.7vw" }}>{btn4_text}</strong></button>

        </div >

    )
   
}


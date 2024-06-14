
import Section2 from './Section2'
import SectionCard from './SectionCard'
import style from './Sections.module.css'
export const Sections = () => {


    const SectionCards=[
      {
        title:"Fill the blanks.",
        content:"Type in a few words. Let the Zety CV wizard fill the rest.",
        image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnRhY3QlMjBmb3JtfGVufDB8fDB8fHww"
      },
      {
        title:"Make it yours",
        content:"Adjust the colors, fonts, and layout with our user-friendly interface.",
        image:"https://plus.unsplash.com/premium_photo-1679920911003-25995bf42ead?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFrZSUyMGl0JTIweW91ciUyMG93biUyMHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        title:"Download as PDF",
        content:"Download your polished resume in the preferred file format. And now you’re ready to apply for your next job.",
        image:"https://th.bing.com/th/id/OIP.URgiVNCtW1556j0anN-figHaHa?rs=1&pid=ImgDetMain"
      },
  
    ]


  return (
    <>
  <div className={style.FlexBox}>   
 {
   SectionCards.map((card, index) => (
    <SectionCard key={index} title={card.title} content={card.content} image={card.image}/>
  )
)
 }
  </div>
  <div>

 <Section2/>

  </div>
  </>
  )
}

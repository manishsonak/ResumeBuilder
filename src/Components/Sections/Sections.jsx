
import Section2 from './Section2'
import SectionCard from './SectionCard'
import style from './Sections.module.css'
export const Sections = () => {


    const SectionCards=[
      {
        title:"Fill the blanks.",
        content:"Type in a few words. Let the Zety CV wizard fill the rest.",
        image:"https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/step2.png&w=3840&h=undefined&q=100"
      },
      {
        title:"Make it yours",
        content:"Adjust the colors, fonts, and layout with our user-friendly interface.",
        image:"https://assets.zety.com/lp/_next/image?url=/blobimages/zty/sem/images/step3.png&w=3840&h=undefined&q=100"
      },
      {
        title:"Download as PDF",
        content:"Download your polished resume in the preferred file format. And now you’re ready to apply for your next job.",
        image:"https://www.iconpacks.net/icons/2/free-pdf-download-icon-2617-thumb.png"
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

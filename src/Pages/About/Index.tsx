import Aboutcard from "./Aboutcard"
import Skillcard from "./Skillcard"
import '../../assets/Styles/about.css'
import '../../assets/Styles/skill.css'

function Index() {
  return (
    <section className="about section container">
      <div className="about-container">
        <Aboutcard />
        <Skillcard />
      </div>
    </section>
  )
}

export default Index
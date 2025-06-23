import Homecontent from "./Homecontent"
import Social from "./Social"
import Homeinfo from "./Homeinfo"
import Services from "./Services"
import '../../assets/Styles/home.css'
import '../../assets/Styles/service.css'

function index() {
  return (
    <section className="home section container">
      <div className="home-container">
        <Homecontent />
        <Social />
        <Homeinfo />
        <Services />
      </div>
    </section>
  )
}

export default index
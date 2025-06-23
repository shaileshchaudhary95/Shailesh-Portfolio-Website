import ContactData from "./ContactData"
import Contactform from "./Contactform"
import '../../assets/Styles/contact.css'

function Index() {
  return (
    <section className="contact section container">
      <div className="contact-ditails">
        <ContactData />
        <Contactform />
      </div>
    </section>
  )
}

export default Index
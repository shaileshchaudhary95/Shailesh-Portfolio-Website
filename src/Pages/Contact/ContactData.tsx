import { contactData } from "../../Utils/Contact";
import Contactinfo from "./Contactinfo";

function ContactData() {
    return (
        <div className="contact-data">
            <h2 className="contact-title">Get in Touch!</h2>
            {
                contactData.map((item, index) => (
                    <Contactinfo key={index} Data={item} />
                ))
            }
        </div>
    )
}

export default ContactData
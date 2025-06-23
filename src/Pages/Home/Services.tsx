import { serviceData } from "../../Utils/Services"
import Servicecard from "./Servicecard"

function Services() {
  return (
    <>
      <h2 className="services-title">My Services</h2>
      <div className="service-container">
        {
          serviceData.map((item, index) => (
            <Servicecard key={index} Data={item} />
          ))
        }
      </div>
    </>
  )
}

export default Services
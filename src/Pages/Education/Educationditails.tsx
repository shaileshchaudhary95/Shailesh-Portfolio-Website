import { educationData } from "../../Utils/Education"
import Educationcard from "./Educationcard"

function Educationditails() {
  return (
    <>
      <h2 className="education-title">Education</h2>
      <div className="education-ditails">
        {
          educationData.map((item, index) => (
            <Educationcard key={index} Data={item} />
          ))
        }
      </div>
    </>
  )
}

export default Educationditails
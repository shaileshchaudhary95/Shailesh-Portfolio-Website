import { aboutData } from "../../Utils/About"
import Aboutditails from "./Aboutditails"

function Aboutcard() {
  return (
    <>
      {
        aboutData.map((item, index) => (
          <Aboutditails key={index} Data={item} />
        ))
      }
    </>
  )
}

export default Aboutcard
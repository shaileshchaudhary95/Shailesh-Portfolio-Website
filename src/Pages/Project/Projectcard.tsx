import { portfolioProjects } from "../../Utils/Project"
import Projectditails from "./Projectditails"

function Projectcard() {
  return (
    <>
      {
        portfolioProjects.map((item, index) => (
          <Projectditails key={index} Data={item} />
        ))
      }
    </>
  )
}

export default Projectcard
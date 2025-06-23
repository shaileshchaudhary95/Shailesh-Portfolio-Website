import { Link } from "react-router-dom"
import { socialLinks } from "../../Utils/Social"

function Social() {
  return (
    <div className="social-icon">
      {
        socialLinks.map((item) => (
          <Link to='/' className="icons"><item.icon /></Link>
        ))
      }
    </div>
  )
}

export default Social
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";

interface aboutProps {
  Data: {
    image: string;
    name: string;
    tag: string;
    description: string;
    button: string;
  }
};

function Aboutditails(props: aboutProps) {
  const { image, name, tag, description, button } = props.Data;
  return (
    <div className="about-ditails">
      <div className="about-img">
        <img src={image} alt="logo" width="100%" height="100%" />
      </div>
      <div className="about-content">
        <h3 className="about-title">{name}</h3>
        <p className="about-subtitle">{tag}</p>
        <p className="about-description">{description}</p>
        <Link to={button} className="about-btn" download>Download CV <span><FiDownload /></span></Link>
      </div>
    </div>
  )
}

export default Aboutditails
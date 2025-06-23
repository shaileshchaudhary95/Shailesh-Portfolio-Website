import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

interface projectProps {
  Data: {
    image: string;
    title: string;
    tools: string[];
    description: string;
    link: string;
  }
};

function Projectditails(props: projectProps) {
  const { image, title, tools, description, link } = props.Data;
  return (
    <div className="project-ditails">
      <div className="project-img">
        <img src={image} alt={title} width="100%" height="100%" />
      </div>

      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <div className="project-tools">
          {
            tools.map((item, index) => (
              <span className="project-tag" key={index}>{item}</span>
            ))
          }
        </div>
        <p className="project-description">{description}</p>
        <Link to={link} className="project-btn">See Project <FaArrowRightLong /></Link>
      </div>
    </div>
  )
}

export default Projectditails



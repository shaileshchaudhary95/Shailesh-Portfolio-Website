import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

interface serviceProps {
    Data: {
        image: string;
        title: string;
        description: string;
        button: string;
    }
}

function Servicecard(props: serviceProps) {
    const { image, title, description, button } = props.Data;
    return (
        <div className="service-card">
            <div className="service-image">
                <img src={image} alt={title} width="100%" height="100%" />
            </div>
            <div className="service-content">
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
                <Link to='/' className="service-btn">{button}<FaArrowRightLong /></Link>
            </div>
        </div>
    )
}

export default Servicecard
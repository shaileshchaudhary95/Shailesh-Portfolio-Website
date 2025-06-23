interface skillProps {
    Data: {
        image: string;
        language: string;
        description: string;
    }
};

function Skillditails(props: skillProps) {
    const { image, language, description } = props.Data;
    return (
        <div className="skill-box">
            <div className="skill-image">
                <img src={image} alt={language} width="100%" height="100%" />
            </div>
            <div className="skill-content">
                <h3 className="skill-language">{language}</h3>
                <p className="skill-description">{description}</p>
            </div>
        </div>
    )
}

export default Skillditails
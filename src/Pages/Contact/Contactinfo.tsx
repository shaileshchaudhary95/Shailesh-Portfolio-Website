interface contactProps {
    Data: {
        image: string;
        name: string;
    }
};

function Contactinfo(props: contactProps) {
    const { image, name } = props.Data;
    return (
        <div className="contact-info">
            <div className="contact-box">
                <div className="contact-icon">
                    <img src={image} alt={name} width="30px" height="30px" />
                </div>
                <div className="contact-text">{name}</div>
            </div>
        </div>
    )
}

export default Contactinfo
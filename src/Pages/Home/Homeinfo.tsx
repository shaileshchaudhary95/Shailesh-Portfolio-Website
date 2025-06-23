import { homeinfoData } from "../../Utils/Home"

function Homeinfo() {
    return (
        <div className="home-info">
            {
                homeinfoData.map((item) => (
                    <div className="home-box">
                        <h3 className="home-number">{item.number}</h3>
                        <p className="home-text">{item.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Homeinfo
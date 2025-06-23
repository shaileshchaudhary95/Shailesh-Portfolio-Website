import { skillData } from "../../Utils/Skill"
import Skillditails from "./Skillditails"

function Skillcard() {
    return (
        <>
            <h2 className="skill-title">My Skills</h2>
            <div className="skill-data">
                {
                    skillData.map((item, index) => (
                        <Skillditails key={index} Data={item} />
                    ))
                }
            </div>
        </>
    )
}

export default Skillcard
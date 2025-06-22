import { useState } from 'react';
import { NavLink } from "react-router-dom"
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { navLinks } from "../../Utils/Navlinks"

function Navmenu() {
    const [isOpen, setisOpen] = useState(false)

    const navToggle = () => {
        setisOpen(!isOpen)
    }

    return (
        <>
            <ul className={`nav-list ${isOpen ? 'show-menu' : 'nav_list'}`}>
                {
                    navLinks.map((index) => (
                        <li className="nav-item">
                            <NavLink to={index.path} className="nav-link" onClick={navToggle}>{index.name}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <div className="nav-toggle" onClick={navToggle}>
                {isOpen ? <IoClose /> : <TbMenu2 />}
            </div>
        </>
    )
}

export default Navmenu
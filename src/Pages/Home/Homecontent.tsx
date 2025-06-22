import hand from '../../assets/Images/SVG/hand.svg'

function Homecontent() {
    return (
        <div className="home-content">
            <h2 className="home-hey">Hey, there <span><img src={hand} alt="hand" /></span></h2>
            <h1 className="home-title">I'm Shailesh Chaudhary</h1>
            <h3 className="home-subtitle">A Front-end Developer</h3>
            <p className="home-description">currently focused on building user experiences that drive growth.</p>
        </div>
    )
}

export default Homecontent
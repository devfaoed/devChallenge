import "./sidebar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCode, faHome, faDashboard, faSignIn, faQuestion} from "@fortawesome/free-solid-svg-icons"

const SideBar = () => {
    return(
        <div className="navbar">
            <div className="navbarItems">
                <h3 className="navHeader"> <FontAwesomeIcon icon={faCode} className="headerIcon"/> devChallenges</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faHome} className="navbarIcon" /> Home</li>
                    <li><FontAwesomeIcon icon={faDashboard} className="navbarIcon" /> Dashboard</li>
                    <li><FontAwesomeIcon icon={faSignIn} className="navbarIcon" /> Login</li>
                    <li><FontAwesomeIcon icon={faQuestion} className="navbarIcon" /> FAQ</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default SideBar
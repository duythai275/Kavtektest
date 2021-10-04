import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Menu = () => {

    return (
        <div className="menu-wrapper">
            <div className="menu-container">
                <div className="menu-item">
                    <AssessmentRoundedIcon />
                    <div className="menu-item-name">
                        Dashboard
                    </div>
                </div>
                <div className="menu-item">
                    <SupervisorAccountRoundedIcon />
                    <div className="menu-item-name">
                        About Us
                    </div>
                </div>
                <div className="menu-item">
                    <ContactMailOutlinedIcon />
                    <div className="menu-item-name">
                        Contact Us
                    </div>
                </div>
            </div>
            <div className="menu-item-end">
                <ExitToAppOutlinedIcon style={{color: "#979797"}} />
                <div>
                    Log out
                </div>
            </div>
        </div>
    )
}

export default Menu;
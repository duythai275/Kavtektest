import "./index.css";
// import Drawer from '@mui/material/Drawer';

import Account from "./account";
import Menu from "./menu"

const Sidebar = props => {
    return (
        // <Drawer
        //     variant="permanent"
        //     sx={{
        //         display: { xs: 'none', sm: 'block' },
        //         '& .MuiDrawer-paper': { width: 253, backgroundColor: "#E6EAF7", border: 0 }
        //     }}
        //     open
        // >
            <div className="sidebar-container">
                <Account />
                <Menu />
            </div>
        // </Drawer>
    )
}

export default Sidebar;
import Avatar from "@mui/material/Avatar";
const Account = () => {
    return (
        <div className="account-container">
            <div className="account-avatar">
                <Avatar src="" />
            </div>
            <div className="account-info">
                <div className="account-name">Thai Nguyen</div>
                <div className="account-role">Superadmin</div>
            </div>
        </div>
    )
}

export default Account;
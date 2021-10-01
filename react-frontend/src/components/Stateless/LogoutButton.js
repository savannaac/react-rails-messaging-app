export const LogoutButton = (props) => {
    return (
        <button className="exit-button" onClick={(e) => props.handleLogOut(e)}>x</button>
    );
};
export const BackButton = (props) => {
    return (
        <button className="back-button" onClick={(e) => props.handleClick(e)}>⇠</button>
    );
};
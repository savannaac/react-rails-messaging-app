export const DeleteConvoButton = (props) => {
    return (
        <button className="delete-convo-button" onClick={(e) => props.handleDelete(e)}>ⓧ</button>
    );
};
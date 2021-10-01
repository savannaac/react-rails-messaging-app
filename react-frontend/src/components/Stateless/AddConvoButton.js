export const AddConvoButton = (props) => {
    return (
        <button className="add-convo-button" onClick={(e) => props.handleAdd(e)}>+</button>
    )
}
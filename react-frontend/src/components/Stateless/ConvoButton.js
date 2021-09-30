export const AddConvoButton = (props) => {
    return (
        <div>
            <div className="buttons-row">
                <button className="add-convo-button" onClick={(e) => props.handleAdd(e)}>+</button>
            </div>
        </div>
    )
}
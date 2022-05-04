import { Store } from '/src/components/StoreProvider'
import { useContext } from 'react'

const ToDoList = () => {

    const { state, dispatch } = useContext(Store)

    const onCheckbox = (event, note) => {
        const isChecked = event.currentTarget.checked;
        dispatch({ type: "update-note", payload: { ...note, done: isChecked } })
    }

    const onDelete = (e, note) => {
        dispatch({ type: "remove-note", payload: { ...note } })
    }

    return (
        <div>
            <h3>Pending actions</h3>

            <ul>
                {state.listOfNotes.map(note => {
                    return <li key={note.id} style={note.done ? { textDecoration: 'line-through' } : {}}>
                        {note.title} <br />
                        {note.message} <br />
                        <input type="checkbox" checked={note.done} onChange={(e) => onCheckbox(e, note)} />
                        <button style={{ backgroundColor: "red" }} onClick={(e) => onDelete(e, note)}>✖</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList
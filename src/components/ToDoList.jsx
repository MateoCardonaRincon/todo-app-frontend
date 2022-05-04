import { Store } from '/src/components/StoreProvider'
import { useContext, useEffect } from 'react'

const ToDoList = () => {

    // call to the context state and dispatch
    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        let listOfNotes = fetchAllNotes().then(
            notes => {
                let action = {
                    type: "get-notes",
                    payload: notes
                }
                dispatch(action)
            })
    }, [])

    const fetchAllNotes = async () => {
        let response = await fetch("http://localhost:8081/api/get/notes")
        let data = await response.json()
        return data
    }

    // updates a note, by changing the done property depending on the state of the checkbox
    const onCheckbox = (event, note) => {
        const isChecked = event.currentTarget.checked;
        dispatch({ type: "update-note", payload: { ...note, done: isChecked } })
    }

    // this event triggers the remove-note case in the dispatcher, removing the note by id
    // out of the listOfNotes property of the context state
    const onDelete = (e, note) => {
        dispatch({ type: "remove-note", payload: { ...note } })
    }

    return (
        <div>
            <h3>Pending tasks</h3>
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
import { Store } from '/src/components/StoreProvider'
import { useContext } from 'react'

const ToDoList = () => {

    const { state, dispatch } = useContext(Store)

    return (
        <div>
            <h3>Pending actions</h3>

            <ul>
                {state.listOfNotes.map(note => {
                    return <li key={note.id} style={note.done ? { textDecoration: 'line-through' } : {}}>
                        {note.title} <br />
                        {note.message} <br />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList
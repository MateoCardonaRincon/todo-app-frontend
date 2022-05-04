import React, { useContext, useRef, useState } from 'react'
import { Store } from '/src/components/StoreProvider'

const Form = () => {

    // useRef hook to clean the inputs after adding a note
    const formRef = useRef(null)

    // useState hook to control the states of the two inputs in the Form component
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    // call the context state and the dispatcher to update the state after
    // add, update and delete events
    const { state, dispatch } = useContext(Store)

    // set the value of the title through the useState hook, taking the onChange event value
    const addTitle = (event) => {
        setTitle(event.target.value)
    }

    // set the value of the message through the useState hook, taking the onChange event value
    const addMessage = (event) => {
        setMessage(event.target.value)
    }

    // Triggers the dispatch when add a new note with not empty title and message
    const onAdd = async (event) => {
        event.preventDefault();

        if (title && message) {

            const noteFromForm = { title, message, done: false }

            let noteSaved = await fetch("http://localhost:8081/api/save/note", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(noteFromForm)
            }).then(response => response.json());

            dispatch({ type: "add-note", payload: noteSaved })

            // Reset input values of the Form component   
            formRef.current.reset()
        }
    }

    return (
        <form ref={formRef}>
            <label>Title:</label>
            <input type="text" name="title" onChange={addTitle} />
            <label>Message:</label>
            <input type="text" name="message" onChange={addMessage} />
            <button onClick={onAdd}>Add note</button>
        </form>
    )
}

export default Form
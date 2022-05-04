import React, { useContext, useRef, useState } from 'react'
import { Store } from '/src/components/StoreProvider'

const Form = () => {

    const formRef = useRef(null)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const { state, dispatch } = useContext(Store)

    const addTitle = (event) => {
        setTitle(event.target.value)
    }

    const addMessage = (event) => {
        setMessage(event.target.value)
    }

    const onAdd = (event) => {
        event.preventDefault();
        if (title && message) {
            dispatch({ type: "add-note", payload: { title, message } })
        }
        
        formRef.current.reset()
    }

    return (
        <form ref={formRef}>
            <label>Title:</label>
            <input type="text" name="title" onChange={addTitle}/>
            <label>Message:</label>
            <input type="text" name="message" onChange={addMessage}/>
            <button onClick={onAdd}>Add note</button>
        </form>
    )
}

export default Form
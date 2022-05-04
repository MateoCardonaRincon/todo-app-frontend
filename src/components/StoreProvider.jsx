import { createContext, useReducer } from "react"
import reducer from "/src/components/reducer"

// The app renders its components taking this state as starting point
const initialState = {
    note: {
        id: "",
        title: "",
        message: "",
        done: false
    },
    listOfNotes: [
        {
            id: 0,
            title: "Default Title",
            message: "Default message",
            done: true
        },
        {
            id: 1,
            title: "Other Title",
            message: "Other message",
            done: false
        }
    ],
}

// Setting the initialState as a context state
const Store = createContext(initialState)

// Creating a component to wrap the components that will use the context state
const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Store.Provider value={{state, dispatch}}>
            {children}
        </Store.Provider>
    )
}

export default StoreProvider

export {Store, initialState}
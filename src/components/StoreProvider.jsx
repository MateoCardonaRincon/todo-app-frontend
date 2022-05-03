import { createContext, useReducer } from "react"
import reducer from "/src/components/Reducer"

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

const Store = createContext(initialState)

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
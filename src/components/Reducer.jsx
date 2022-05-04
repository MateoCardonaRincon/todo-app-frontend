const reducer = (state, action) => {
    switch (action.type) {
        case "add-note":
            console.log("Validating add-note case in the reducer")

            const newNote = {
                id: Math.floor(Math.random() * 100),
                title: action.payload.title,
                message: action.payload.message,
                done: false
            }

            const newListOfNotes = [...state.listOfNotes, newNote]
            const newState = { ...state, listOfNotes: newListOfNotes }
            return newState
        case "remove-note":
            return state
        case "update-note":
            return state
    }
}

export default reducer
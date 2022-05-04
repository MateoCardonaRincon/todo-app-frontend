const reducer = (state, action) => {
    switch (action.type) {
        case "add-note":
            const newNote = {
                id: Math.floor(Math.random() * 100),
                title: action.payload.title,
                message: action.payload.message,
                done: false
            }

            const newListOfNotes = [...state.listOfNotes, newNote]

            const stateAfterAddNote = { ...state, listOfNotes: newListOfNotes }

            return stateAfterAddNote

        case "remove-note":
            const noteToDelete = action.payload

            const listOfNotesAfterDelete = state.listOfNotes.filter((note) => note.id !== noteToDelete.id)

            const stateAfterDeleteNote = { ...state, listOfNotes: listOfNotesAfterDelete }

            return stateAfterDeleteNote

        case "update-note":
            const updatedNote = action.payload

            const updatedListOfNotes = state.listOfNotes.map(
                (note) => note.id === updatedNote.id ? updatedNote : note)

            const stateAfterUpdateNote = { ...state, listOfNotes: updatedListOfNotes }

            return stateAfterUpdateNote
    }
}

export default reducer
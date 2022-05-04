// This is the reducer function that is triggered by the context dispatcher
// It reduce the dispatch call to one of three cases: for add, delete or update a note,
// updating the context state by modifing the listOfNotes property of the state

const reducer = (state, action) => {
    switch (action.type) {
        case "get-notes":

            const stateWithfetchedNotes = { ...state, listOfNotes: action.payload }

            return stateWithfetchedNotes

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
// This is the reducer function that is triggered by the context dispatcher
// Reduces the dispatch call to one of three cases: for get all notes from the DB, add, delete or update a note,
// updating the context state by modifing the listOfNotes property of the state

const reducer = (state, action) => {
    switch (action.type) {

        // fetched list of nodes is passed through the action.payload,
        // and stored in the context state using the spread operator
        case "get-notes":

            const stateWithfetchedNotes = { ...state, listOfNotes: action.payload }

            return stateWithfetchedNotes

        // as the post request returns the created object, this response is sent through the action.payload
        // to update the listOfNodes in the state of the context
        case "add-note":
            const newNote = action.payload

            const newListOfNotes = [...state.listOfNotes, newNote]

            const stateAfterAddNote = { ...state, listOfNotes: newListOfNotes }

            return stateAfterAddNote

        //
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
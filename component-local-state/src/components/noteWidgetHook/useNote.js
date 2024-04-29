import { useCallback, useState } from "react"

// In this example we have extracted all the logic for handling notes
// from the function except how it's hooked up in the component.
// If this is the best seperation of responsibilities is an
// open question, in other words it depends on the broader context
// this is intended to be used in. So feel free to discuss
// and see what tradeoffs you can see has been made
// and try to figure out how this could be used in a larger
// system, and what issues one might face there.

/**
 * This is a very basic implementation of a unique id
 * generator for use with this note widget, look for
 * more advanced id generators if you intend to use
 * it outside this example, UUID v4 is a decent starting point
 */
function createIdGenerator() {
  let id = 0
  return () => id++
}

export function useNote({initialNotes = []}) {
  const [ notes, setNotes ] = useState(initialNotes)
  const [ newNoteContent, setNewNoteContent ] = useState("")
  // React.useCallback is another hook that allows us to
  // store a single function and only recreate it when
  // the entries in the second parameter, the dependency list,
  // changes
  const getNewId = useCallback(createIdGenerator(), [])

  function addNewNote(content) {
    if (content.trim() === "") {
      return
    }

    const newNote = {
      id: getNewId(),
      createdAt: new Date(),
      content, newNoteContent,
    }

    setNotes((previousNotes) => {
      return [
        ...previousNotes,
        newNote,
      ]
    })

    setNewNoteContent("")
  }

  function deleteNote(noteId) {
    setNotes((currentNotes) => currentNotes.filter((note) => {
      return note.id !== noteId
    }))
  }

  function deleteAllNotes() {
    setNotes([])
  }

  function clearNewNoteContent() {
    setNewNoteContent("")
  }

  return {
    notes,
    addNewNote,
    deleteNote,
    deleteAllNotes,
    newNoteContent,
    setNewNoteContent,
    clearNewNoteContent,
  }
}

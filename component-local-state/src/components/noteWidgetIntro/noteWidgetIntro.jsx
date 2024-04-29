import { useState } from 'react'
import style from './noteWidgetIntro.module.css'

export function NoteWidget() {
  // Here we have two different states to keep track of
  // The first is the list of notes we have stored
  // The second is the current value of the input field
  // While there are multiple ways to structure these
  // The advice is to keep the states that are changing
  // togheter under a single React.useState, while those
  // that are changing independently of each other in
  // seperate React.useState statements
  const [ notes, setNotes ] = useState([])
  const [ newNote, setNewNote ] = useState("")

  function clearNewNote() {
    setNewNote("")
  }

  function deleteAllNotes() {
    setNotes([])
  }

  function handleChange(str) {
    setNewNote(str)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (newNote.trim() === "") {
      return
    }

    setNotes((previousNotes) => {
      return [
        ...previousNotes,
        newNote,
      ]
    })
    setNewNote("")
  }

  return (
    <div className={style["widget"]}>
      <div>
        <form
          onSubmit={handleSubmit}
          onReset={clearNewNote}
          className={style["input-form"]}
        >
          <label htmlFor="note-widget">
            Note
          </label>
          <div>
            <input
              value={newNote}
              onChange={(event) => handleChange(event.target.value)}
              type="text"
              name="new-note"
              /**
               * We are hardcoding the id here, but due to this being a component
               * we would need some way to actually generate a globally unique id
               * for this to ensure there are no collisions between multiple
               * instances of the component
               */
              id="note-widget"
              placeholder='Write a note'
            />
            <button type="submit">Add</button>
            <button
              disabled={newNote.length <= 0}
              type="reset"
            >
              Clear
            </button>
          </div>
        </form>

        <button
          disabled={notes.length <= 0}
          onClick={deleteAllNotes}
        >
          Clear All
        </button>

        <ul className={style["note-list"]}>
          {notes.map((note, index) => {
            // since we don't have anything to uniquely identify the notes here
            // we are falling back to the index of the note, be mindfull of the
            // caveats though
            // https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
            return (
              <li key={index}>
                <NoteCard note={note} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function NoteCard({note}) {
  return (
    <div className={style["note-card"]}>
      <p>{note}</p>
    </div>
  )
}

import style from './noteWidgetHook.module.css'
import { useNote } from './useNote'

export function NoteWidgetHook() {
  const {
    clearNewNoteContent,
    deleteAllNotes,
    setNewNoteContent,
    addNewNote,
    deleteNote,
    newNoteContent,
    notes,
  } = useNote()

  // We could have setup the useNote().addNewNote function
  // to take the whole event, but handling event propagation
  // was thought to be better handled by the caller then
  // the including it in the hook
  function handleSubmit(event) {
    event.preventDefault()
    addNewNote(newNoteContent)
  }

  return (
    <div className={style["widget"]}>
      <div>
        <form
          onSubmit={handleSubmit}
          onReset={clearNewNoteContent}
          className={style["input-form"]}
        >
          <label htmlFor="note-widget">
            Note
          </label>
          <div>
            <input
              value={newNoteContent}
              onChange={(event) => setNewNoteContent(event.target.value)}
              type="text"
              name="new-note"
              id="note-widget"
              placeholder='Write a note'
            />
            <button type="submit">Add</button>
            <button
              disabled={newNoteContent.length <= 0}
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
          {notes.map((note) => {
            return (
              <li key={note.id}>
                <NoteCard
                  note={note}
                  onDelete={() => deleteNote(note.id)}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function NoteCard({note, onDelete}) {
  return (
    <div className={style["note-card"]}>
      <p>{note.content}</p>
      <button onClick={onDelete}>🗑</button>
    </div>
  )
}

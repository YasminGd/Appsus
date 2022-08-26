import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    addNewNote,
    toggleTodo,
    removeNote,
    setColor,
    editNote
}

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            title: "Fullstack Me Baby!",
            subject: ">:)"
        },
        style: {
            backgroundColor: "white"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://serving.photos.photobox.com/434591125f8a5ca2dfd6e90fdfa495f52bb5e08a1e05c5b337485f651ceff0384dca570c.jpg",
            title: "YEs"
        },
        style: {
            backgroundColor: "dark-blue"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            title: "Get my stuff together",
            todos: [
                { txt: "Move back home", doneAt: null, id: utilService.makeId() },
                { txt: "Pet a cat", doneAt: 187111111, id: utilService.makeId() }
            ]
        },
        style: {
            backgroundColor: "purple"
        }
    },
    {
        id: "n104",
        type: "note-todos",
        info: {
            title: "subjects",
            todos: [
                { txt: "ajax", doneAt: null, id: utilService.makeId() },
                { txt: "CRUDL", doneAt: 187111111, id: utilService.makeId() }
            ]
        },
        style: {
            backgroundColor: "orange"
        }
    },
    {
        id: "n106",
        type: "note-img",
        info: {
            url: "https://blogs.nasa.gov/webb/wp-content/uploads/sites/326/2022/08/JWST_2022-07-27_Jupiter.png",
            title: ""
        },
        style: {
            backgroundColor: "light-blue"
        }
    },
    {
        id: "n107",
        type: "note-img",
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Saturn_with_head_protected_by_winter_cloak%2C_holding_a_scythe_in_his_right_hand%2C_fresco_from_the_House_of_the_Dioscuri_at_Pompeii%2C_Naples_Archaeological_Museum_%2823497733210%29.jpg/640px-thumbnail.jpg",
            title: ""
        },
        style: {
            backgroundColor: "white"
        }
    },
    {
        id: "n108",
        type: "note-img",
        info: {
            url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
            title: ""
        },
        style: {
            backgroundColor: "white"
        }
    },
    {
        id: "n109",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/watch?v=NxqDMDF59Lo",
            title: ""
        },
        style: {
            backgroundColor: "white"
        }
    }, {
        id: "n110",
        type: "note-txt",
        isPinned: true,
        info: {
            title: "Hello!",
            subject: "From mars"
        },
        style: {
            backgroundColor: "white"
        }
    }, {
        id: "n111",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/watch?v=t9d1Sm7h1s4",
            title: "One day"
        },
        style: {
            backgroundColor: "white"
        }
    }
]
const KEY = 'notesDB'

function query() {
    let notes = storageService.loadFromStorage(KEY)
    if (!notes) {
        notes = gNotes
        storageService.saveToStorage(KEY, notes)
    }
    return Promise.resolve(notes)
}

function addNewNote(note) {
    note.id = utilService.makeId()
    const notes = storageService.loadFromStorage(KEY)
    if (note.type === 'note-todos') {
        let todos = note.info.todos.split(',')
        todos = todos.map(todo => ({ txt: todo.trim(), doneAt: null }))
        note.info.todos = todos
    }
    note.style = { backgroundColor: 'white' }
    notes.unshift(note)
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}

function toggleTodo(noteId, todoIdx) {
    const notes = storageService.loadFromStorage(KEY)
    const note = notes.find(note => note.id === noteId)
    const todo = note.info.todos[todoIdx]

    todo.doneAt = todo.doneAt ? null : Date.now()
    storageService.saveToStorage(KEY, notes)

    return Promise.resolve()
}

function removeNote(id) {
    let notes = storageService.loadFromStorage(KEY)
    notes = notes.filter(note => note.id !== id)
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}

function setColor(color, id) {
    const notes = storageService.loadFromStorage(KEY)
    const note = notes.find(note => note.id === id)
    if (!note.style) note.style = { backgroundColor: color }
    else note.style.backgroundColor = color
    storageService.saveToStorage(KEY, notes)

    return Promise.resolve()
}

function editNote(newNote) {
    let notes = storageService.loadFromStorage(KEY)
    notes = notes.map(note => note.id === newNote.id ? newNote : note)
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}
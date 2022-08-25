import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    addNewNote,
    toggleTodo
}

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            title: "Fullstack Me Baby!",
            subject: ">:)"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F022%2F134%2Felmo.jpg",
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
            url: "https://images7.memedroid.com/images/UPLOADED952/5dea9e3e37e82.jpeg",
            title: ""
        },
    },
    {
        id: "n108",
        type: "note-img",
        info: {
            url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
            title: ""
        },
    },
    {
        id: "n109",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/watch?v=NxqDMDF59Lo",
            title: ""
        },
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
    notes.unshift(note)
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}

function toggleTodo(noteId, todoIdx) {
    const notes = storageService.loadFromStorage(KEY)
    const note = notes.find(note => note.id === noteId)
    const todo = note.info.todos[todoIdx]

    todo.doneAt = todo.doneAt ? null : new Date()
    storageService.saveToStorage(KEY, notes)

    return Promise.resolve()
}
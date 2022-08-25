import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    addNewNote,
    toggleTodo,
    removeNote,
    setColor
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
    }, {
        id: "n110",
        type: "note-txt",
        isPinned: true,
        info: {
            title: "Hello!",
            subject: "From mars"
        }
    }, {
        id: "n111",
        type: "note-txt",
        isPinned: true,
        info: {
            title: "Rubber duck debuggin",
            subject: "In software engineering, rubber duck debugging (or rubberducking) is a method of debugging code by articulating a problem in spoken or written natural language. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck.[1] Many other terms exist for this technique, often involving different (usually) inanimate objects, or pets such as a dog or a cat.Many programmers have had the experience of explaining a problem to someone else, possibly even to someone who knows nothing about programming, and then hitting upon the solution in the process of explaining the problem.In describing what the code is supposed to do and observing what it actually does, any incongruity between these two becomes apparent.[2] More generally, teaching a subject forces its evaluation from different perspectives and can provide a deeper understanding.[3] By using an inanimate object, the programmer can try to accomplish this without having to interrupt anyone else.This approach has been taught in computer science and software engineering courses."
        }
    },
    {
        id: "n112",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/watch?v=t9d1Sm7h1s4",
            title: "One day"
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
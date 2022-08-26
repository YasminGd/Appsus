import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    getNotes,
    // getPinnedNotes,
    addNewNote,
    toggleTodo,
    removeNote,
    setColor,
    editNote,
    getInputNameAndVal,
    getInputPlaceHolder,
    cloneNote,
    togglePinnedNote,
    getNoteType
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
        },
        isPinned: false
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
        },
        isPinned: false
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
        },
        isPinned: false
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
        },
        isPinned: false
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
        },
        isPinned: false
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
        },
        isPinned: false
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
        },
        isPinned: false
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
        },
        isPinned: false
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
        },
        isPinned: false
    }, {
        id: "n111",
        type: "note-video",
        info: {
            url: "https://www.youtube.com/watch?v=t9d1Sm7h1s4",
            title: "One day"
        },
        style: {
            backgroundColor: "white"
        },
        isPinned: true
    }
]
const KEY = 'notesDB'

function getNotes(filter, typeFilter, isPinned) {
    let notes = storageService.loadFromStorage(KEY)
    if (!notes) {
        notes = gNotes
        storageService.saveToStorage(KEY, notes)
    }
    if(typeFilter) notes = notes.filter(note => note.type === typeFilter)
    notes = notes.filter(note => {
        if (note.isPinned === isPinned) {
            if (!filter) return true
            let inNote = note.info.title.toLowerCase().includes(filter.toLowerCase())
            if (note.info.subject) {
                inNote = inNote || note.info.subject.toLowerCase().includes(filter.toLowerCase())
            } else if (note.info.todos && note.info.todos.length) {
                inNote = inNote || note.info.todos.some(todo => todo.txt.toLowerCase().includes(filter))
            }
            return inNote
        }
        return false
    })
    return Promise.resolve(notes)
}

function addNewNote(note) {
    const notes = storageService.loadFromStorage(KEY)
    if (note.type === 'note-todos') {
        let todos = note.info.todos.split(',')
        todos = todos.map(todo => ({ txt: todo.trim(), doneAt: null }))
        note.info.todos = todos
    }
    note.id = utilService.makeId()
    note.style = { backgroundColor: 'white' }
    note.isPinned = false
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

function getInputNameAndVal(type) {
    switch (type) {
        case ('note-txt'):
            return 'subject'
        case ('note-img'):
        case ('note-video'):
            return 'url'
        case ('note-todos'):
            return 'todos'
    }
}

function getInputPlaceHolder(type) {
    switch (type) {
        case ('note-txt'):
            return 'Take a note...'
        case ('note-img'):
            return 'Enter an image link'
        case ('note-video'):
            return 'Enter a video link'
        case ('note-todos'):
            return 'Enter a list separated by comas'
    }
}

function cloneNote(id) {
    const notes = storageService.loadFromStorage(KEY)
    const note = notes.find(note => note.id === id)
    const noteClone = JSON.parse(JSON.stringify(note))
    noteClone.id = utilService.makeId()
    noteClone.isPinned = false
    notes.unshift(noteClone)
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}

function togglePinnedNote(id) {
    const notes = storageService.loadFromStorage(KEY)
    const note = notes.find(note => note.id === id)
    note.isPinned = !note.isPinned
    storageService.saveToStorage(KEY, notes)
    return Promise.resolve()
}

function getNoteType(filter) {
    switch(filter) {
        case '':
            return ''
        case 'text':
            return'note-txt'
        case 'image':
            return 'note-img'
        case 'video':
            return 'note-video'
        case 'list':
            return 'note-todos'
    }
}
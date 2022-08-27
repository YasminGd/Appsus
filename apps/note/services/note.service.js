import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'
import { demoNotes } from './demo-date.service.js'

export const noteService = {
    getNotes,
    addNewNote,
    toggleTodo,
    removeNote,
    setColor,
    editNote,
    getInputNameAndVal,
    getInputPlaceHolder,
    cloneNote,
    togglePinnedNote,
    getNoteType,
    checkIfNoteChanged,
    getEmptyNoteTemplate
}

const KEY = 'notesDB'

function getNotes(filter, typeFilter, isPinned) {
    let notes = storageService.loadFromStorage(KEY)
    if (!notes) {
        notes = demoNotes
        storageService.saveToStorage(KEY, notes)
    }
    if (typeFilter) notes = notes.filter(note => note.type === typeFilter)
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
    if (!newNote.id) {
        newNote.id = utilService.makeId()
        notes.unshift(newNote)
    }
    else notes = notes.map(note => note.id === newNote.id ? newNote : note)
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
    switch (filter) {
        case '':
            return ''
        case 'text':
            return 'note-txt'
        case 'image':
            return 'note-img'
        case 'video':
            return 'note-video'
        case 'list':
            return 'note-todos'
    }
}

function checkIfNoteChanged(note) {
    switch (note.type) {
        case 'note-txt':
            return (note.info.title || note.info.subject)
        case 'note-img':
        case 'note-video':
            return note.info.url
        case 'note-todos':
            return note.info.todos
    }
}

function getEmptyNoteTemplate() {
    return {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: '',
        isPinned: false
    }
}
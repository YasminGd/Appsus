import { utilService } from "../../../services/util.service.js"

const gNotes = [
    {
        type: 'note-txt',
        info: {
            title: 'Fullstack Me Baby!',
            subject: '>:)',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'purple' },
        id: utilService.makeId(),
        isPinned: true
    }, {
        type: 'note-img',
        info: {
            title: '',
            subject: '',
            url: 'https://serving.photos.photobox.com/434591125f8a5ca2dfd6e90fdfa495f52bb5e08a1e05c5b337485f651ceff0384dca570c.jpg',
            todos: []
        },
        style: { backgroundColor: 'light-blue' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        id: utilService.makeId(),
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
        isPinned: true
    }, {
        type: 'note-txt',
        info: {
            title: 'Why did the chicken cross the road?',
            subject: 'to get to the other side!',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'yellow' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-video',
        info: {
            title: '',
            subject: '',
            url: 'https://www.youtube.com/watch?v=HyWYpM_S-2c',
            todos: []
        },
        style: { backgroundColor: 'yellow' },
        id: utilService.makeId(),
        isPinned: true
    }, {
        id: utilService.makeId(),
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
        isPinned: true
    }, {
        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: "https://blogs.nasa.gov/webb/wp-content/uploads/sites/326/2022/08/JWST_2022-07-27_Jupiter.png",
            title: ""
        },
        style: {
            backgroundColor: "orange"
        },
        isPinned: false
    }, {
        type: 'note-video',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    },
]
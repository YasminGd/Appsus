import { utilService } from "../../../services/util.service.js"

export const demoNotes = [
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
            title: 'Finish watching this until next lesson!',
            subject: '',
            url: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: true
    }, {
        type: 'note-txt',
        info: {
            title: 'Don\'t forget to buy milk',
            subject: '',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'pink' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: 'Rubber duck debugging ',
            subject: 'In software engineering, rubber duck debugging is a method of debugging code by articulating a problem in spoken or written natural language.',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'yellow' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-img',
        info: {
            title: '',
            subject: '',
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg?1661624976109',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-todos',
        info: {
            title: 'Buy furniture',
            subject: '',
            url: '',
            todos: [
                { txt: "A couch", doneAt: null, id: utilService.makeId() },
                { txt: "A mirror", doneAt: null, id: utilService.makeId() },
                { txt: "Cat food?", doneAt: null, id: utilService.makeId() },
                { txt: "Utensils", doneAt: null, id: utilService.makeId() },
            ]
        },
        style: { backgroundColor: 'grey' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: 'DND session next week',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'dark-blue' },
        id: utilService.makeId(),
        isPinned: true
    }, {
        type: 'note-img',
        info: {
            title: '',
            subject: '',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Saturn_with_head_protected_by_winter_cloak%2C_holding_a_scythe_in_his_right_hand%2C_fresco_from_the_House_of_the_Dioscuri_at_Pompeii%2C_Naples_Archaeological_Museum_%2823497733210%29.jpg/640px-thumbnail.jpg',
            todos: []
        },
        style: { backgroundColor: 'orange' },
        id: utilService.makeId(),
        isPinned: false
    },
    {
        type: 'note-video',
        info: {
            title: '',
            subject: '',
            url: 'https://www.youtube.com/watch?v=sjoepLlVL6o&list=LL&index=36',
            todos: []
        },
        style: { backgroundColor: 'dark-blue' },
        id: utilService.makeId(),
        isPinned: false
    },
    {
        type: 'note-todos',
        info: {
            title: '',
            subject: '',
            url: '',
            todos: [
                { txt: " uno", doneAt: 187111111, id: utilService.makeId() },
                { txt: "dos", doneAt: null, id: utilService.makeId() },
                { txt: "tres", doneAt: null, id: utilService.makeId() },
                { txt: "Vamos!", doneAt: null, id: utilService.makeId() },
            ]
        },
        style: { backgroundColor: 'green' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: 'An astronomy lecture in Tel Aviv Uni on the 26/10',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'light-blue' },
        id: utilService.makeId(),
        isPinned: true
    }, {
        type: 'note-txt',
        info: {
            title: 'Birthday',
            subject: 'Dani, Tony and Sam all have their birthdays this week, will we throw a party for all of them together or will we split it?',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'teal' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-img',
        info: {
            title: '',
            subject: '',
            url: 'https://art.pixilart.com/sr2ef79760defc1.png',
            todos: []
        },
        style: { backgroundColor: 'green' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-img',
        info: {
            title: '',
            subject: '',
            url: 'https://art.pixilart.com/original/sr2deabc5df389b.gif',
            todos: []
        },
        style: { backgroundColor: 'grey' },
        id: utilService.makeId(),
        isPinned: true
    }, {
        type: 'note-img',
        info: {
            title: 'The gentle giant',
            subject: '',
            url: 'https://art.pixilart.com/sr2d19f18cdb27f.png',
            todos: []
        },
        style: { backgroundColor: 'green' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-video',
        info: {
            title: '',
            subject: '',
            url: 'https://www.youtube.com/watch?v=8wm9ti-gzLM',
            todos: []
        },
        style: { backgroundColor: 'purple' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: 'need to pick Ali from the airport',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: true
    }, {
        type: 'note-todos',
        info: {
            title: 'Get groceries',
            subject: '',
            url: '',
            todos: [
                { txt: "Milk", doneAt: 187111111, id: utilService.makeId() },
                { txt: "Eggs", doneAt: 187111111, id: utilService.makeId() },
                { txt: "Fries", doneAt: 187111111, id: utilService.makeId() },
                { txt: "Ice cream", doneAt: 187111111, id: utilService.makeId() },
            ]
        },
        style: { backgroundColor: 'orange' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: '☆♬○♩●♪✧♩((ヽ( ᐛ )ﾉ))♩✧♪●♩○♬☆',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'pink' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: 'call her',
            subject: '053-3853754',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'brown' },
        id: utilService.makeId(),
        isPinned: true
    }, {
        type: 'note-img',
        info: {
            title: 'Impressionism was a 19th-century art movement characterized by relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities (often accentuating the effects of the passage of time), ordinary subject matter, unusual visual angles, and inclusion of movement as a crucial element of human perception and experience.',
            subject: '',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/1280px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg?1661628408078',
            todos: []
        },
        style: { backgroundColor: 'green' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-txt',
        info: {
            title: '',
            subject: 'I\'m so done with this',
            url: '',
            todos: []
        },
        style: { backgroundColor: 'light-blue' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-todos',
        info: {
            title: 'Get forgotten groceries',
            subject: '',
            url: '',
            todos: [
                { txt: "cereal", doneAt: null, id: utilService.makeId() },
                { txt: "cat food", doneAt: null, id: utilService.makeId() },
                { txt: "dairy", doneAt: null, id: utilService.makeId() },
                { txt: "Ice cream", doneAt: null, id: utilService.makeId() },
            ]
        },
        style: { backgroundColor: 'brown' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-img',
        info: {
            title: '',
            subject: '',
            url: 'https://art.pixilart.com/sr2bd3964484a21.png',
            todos: []
        },
        style: { backgroundColor: 'white' },
        id: utilService.makeId(),
        isPinned: false
    }, {
        type: 'note-video',
        info: {
            title: '',
            subject: '',
            url: 'https://www.youtube.com/watch?v=gXpiGKf7ixA',
            todos: []
        },
        style: { backgroundColor: 'orange' },
        id: utilService.makeId(),
        isPinned: false
    }
    // }, {
    //     type: 'note-txt',
    //     info: {
    //         title: '',
    //         subject: '',
    //         url: '',
    //         todos: []
    //     },
    //     style: { backgroundColor: 'white' },
    //     id: utilService.makeId(),
    //     isPinned: false
    // }, {
    //     type: 'note-txt',
    //     info: {
    //         title: '',
    //         subject: '',
    //         url: '',
    //         todos: []
    //     },
    //     style: { backgroundColor: 'white' },
    //     id: utilService.makeId(),
    //     isPinned: false
    // }, {
    //     type: 'note-txt',
    //     info: {
    //         title: '',
    //         subject: '',
    //         url: '',
    //         todos: []
    //     },
    //     style: { backgroundColor: 'white' },
    //     id: utilService.makeId(),
    //     isPinned: false
    // }, {
    //     type: 'note-txt',
    //     info: {
    //         title: '',
    //         subject: '',
    //         url: '',
    //         todos: []
    //     },
    //     style: { backgroundColor: 'white' },
    //     id: utilService.makeId(),
    //     isPinned: false
    // }, {
    //     type: 'note-txt',
    //     info: {
    //         title: '',
    //         subject: '',
    //         url: '',
    //         todos: []
    //     },
    //     style: { backgroundColor: 'white' },
    //     id: utilService.makeId(),
    //     isPinned: false
    // }, {
    //     type: 'note-txt',
    //     info: {
    //         title: '',
    //         subject: '',
    //         url: '',
    //         todos: []
    //     },
    //     style: { backgroundColor: 'white' },
    //     id: utilService.makeId(),
    //     isPinned: false
    // }, {
    //     type: 'note-txt',
    //     info: {
    //         title: '',
    //         subject: '',
    //         url: '',
    //         todos: []
    //     },
    //     style: { backgroundColor: 'white' },
    //     id: utilService.makeId(),
    //     isPinned: false
    // }, {
    //     type: 'note-txt',
    //     info: {
    //         title: '',
    //         subject: '',
    //         url: '',
    //         todos: []
    //     },
    //     style: { backgroundColor: 'white' },
    //     id: utilService.makeId(),
    //     isPinned: false
    // }, {
    //     type: 'note-txt',
    //     info: {
    //         title: '',
    //         subject: '',
    //         url: '',
    //         todos: []
    //     },
    //     style: { backgroundColor: 'white' },
    //     id: utilService.makeId(),
    //     isPinned: false
    // },

]


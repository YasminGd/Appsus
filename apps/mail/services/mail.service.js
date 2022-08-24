import { storageService } from '../../../services/storage.service.js'

export const mailService = {
  query,
}

const KEY = 'mailsDB'

const gLoggedInUser = {
  email: 'user@appsus.com',
  // fullname: 'Mahatma Appsus'
}

const gMails = [
  {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e102',
    subject: 'Love you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
  {
    id: 'e103',
    subject: 'How Are you?',
    body: 'Hope you doing well',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
  },
]

function query(filterBy) {
  let mails = _loadMailsFromStorage() || gMails
  if (!mails || !mails.length) {
    mails = gMails
    _saveMailsToStorage(mails)
  }

  if (filterBy) {
    let { keyword } = filterBy
    mails = mails.filter((mail) => {
      return (
        mail.subject.toLowerCase().includes(keyword.toLowerCase()) ||
        mail.body.toLowerCase().includes(keyword.toLowerCase())
      )
    })
  }

  return Promise.resolve(mails)
}

const criteria = {
  status: 'inbox/sent/trash/draft',
  txt: 'puki', // no need to support complex text search
  isRead: true,
  // (optional property, if missing: show all)
  isStared: true, // (optional property, if missing: show all)
  lables: ['important', 'romantic'], // has any of the labels
}

function _saveMailsToStorage(mails) {
  storageService.saveToStorage(KEY, mails)
}

function _loadMailsFromStorage() {
  return storageService.loadFromStorage(KEY)
}

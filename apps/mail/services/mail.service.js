import { storageService } from '../../../services/storage.service.js'

export const mailService = {
  query,
  removeMail,
  getMailById,
  toggleStarredMail,
  toggleReadMail,
  setReadMail,
}

const KEY = 'mailsDB'

const gLoggedInUser = {
  email: 'user@appsus.com',
}

const gMails = [
  {
    id: 'e101',
    subject: 'Publicly Accessible Google API Key for TravelTip',
    body: 'Would love to catch up sometimes, Would love to catch up sometimes.',
    isRead: false,
    isStarred: true,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: 'yasmin@gudha.com',
  },
  {
    id: 'e102',
    subject: 'Love you!',
    body: 'Would love to catch up sometimes',
    isRead: true,
    isStarred: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: 'bar@ohayon.com',
  },
  {
    id: 'e103',
    subject: 'How Are you?',
    body: 'Hope you doing well',
    isRead: false,
    isStarred: true,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: 'bar@ohayon.com',
  },
  {
    id: 'e104',
    subject: 'Reference Code: 20KEA - Date: Wed, 17 Aug 2022',
    body: 'We have received your request to cancel your tickets that you purchased.',
    isRead: true,
    isStarred: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: 'bar@ohayon.com',
  },
  {
    id: 'e105',
    subject: 'Your invoice from Apple.',
    body: 'iCloud+ with 2 TB of storage',
    isRead: true,
    isStarred: true,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: 'bar@ohayon.com',
  },
]

function query(filterBy) {
  let mails = _loadMailsFromStorage()
  if (!mails || !mails.length) {
    mails = gMails
    _saveMailsToStorage(mails)
  }

  // if (filterBy) {
  //   let { keyword } = filterBy
  //   mails = mails.filter((mail) => {
  //     return (
  //       mail.subject.toLowerCase().includes(keyword.toLowerCase()) ||
  //       mail.body.toLowerCase().includes(keyword.toLowerCase())
  //     )
  //   })
  // }

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

function getMailById(mailId) {
  if (!mailId) return Promise.resolve(null)
  const mails = _loadMailsFromStorage()
  const mail = mails.find((mail) => mailId === mail.id)
  return Promise.resolve(mail)
}

function removeMail(mailId) {
  return getMailById(mailId).then((mail) => {
    if (!mail.removedAt) {
      mail.removedAt = Date.now()
      updateMail(mail)
      return Promise.resolve(mail)
    } else {
      let mails = _loadMailsFromStorage()
      mails = mails.filter((mail) => mail.id !== mailId)
      _saveMailsToStorage(mails)
      return Promise.resolve()
    }
  })
}

function updateMail(mailToUpdate) {
  let mails = _loadMailsFromStorage()
  mails = mails.map((mail) =>
    mail.id === mailToUpdate.id ? mailToUpdate : mail
  )
  _saveMailsToStorage(mails)
  return Promise.resolve(mailToUpdate)
}

function toggleStarredMail(mailId) {
  return getMailById(mailId).then((mail) => {
    mail.isStarred = !mail.isStarred
    updateMail(mail)
    return Promise.resolve()
  })
}

function toggleReadMail(mailId) {
  return getMailById(mailId).then((mail) => {
    mail.isRead = !mail.isRead
    updateMail(mail)
    return Promise.resolve()
  })
}

function setReadMail(mailId) {
  return getMailById(mailId).then((mail) => {
    mail.isRead = true
    updateMail(mail)
    return Promise.resolve()
  })
}

function _saveMailsToStorage(mails) {
  storageService.saveToStorage(KEY, mails)
}

function _loadMailsFromStorage() {
  return storageService.loadFromStorage(KEY)
}

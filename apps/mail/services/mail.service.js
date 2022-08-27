import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
  query,
  removeMail,
  getMailById,
  toggleStarredMail,
  toggleReadMail,
  setReadMail,
  sendMail,
  getUnreadMailsCount,
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
    to: 'user@appsus.com',
    from: 'yasmin@gudha.com',
  },
  {
    id: 'e102',
    subject: 'Love you!',
    body: 'Would love to catch up sometimes',
    isRead: true,
    isStarred: false,
    sentAt: 1551133930594,
    to: 'user@appsus.com',
    from: 'bar@ohayon.com',
  },
  {
    id: 'e103',
    subject: 'Welcome to Slack',
    body: 'Coding Academy - Jul 22 on Slack: New Account Details',
    isRead: false,
    isStarred: true,
    sentAt: 1551133930594,
    to: 'user@appsus.com',
    from: 'feedback@slack.com',
  },
  {
    id: 'e104',
    subject: 'Reference Code: 20KEA - Date: Wed, 17 Aug 2022',
    body: 'We have received your request to cancel your tickets that you purchased.',
    isRead: true,
    isStarred: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: 'noreply@tmisrael.co.il',
  },
  {
    id: 'e105',
    subject: 'Your invoice from Apple.',
    body: 'iCloud+ with 2 TB of storage',
    isRead: true,
    isStarred: true,
    sentAt: 1551133930594,
    to: 'momo@momo.com',
    from: 'no_reply@email.apple.com',
  },
  {
    id: 'e106',
    subject: '100% of budget reached',
    body: 'Your billing account "My Billing Account" has reached 100% of the budget',
    isRead: false,
    isStarred: true,
    sentAt: 1551133930594,
    to: 'user@appsus.com',
    from: 'CloudPlatform@google.com',
  },
]

function query(filterBy, filterType) {
  let mails = _loadMailsFromStorage()
  if (!mails || !mails.length) {
    mails = gMails
    _saveMailsToStorage(mails)
  }

  if (filterType) {
    switch (filterType) {
      case 'inbox':
        mails = mails.filter(
          (mail) =>
            mail.to.toLowerCase() === gLoggedInUser.email.toLowerCase() &&
            !mail.removedAt
        )
        break
      case 'starred':
        mails = mails.filter((mail) => mail.isStarred && !mail.removedAt)
        break

      case 'sent':
        mails = mails.filter(
          (mail) =>
            mail.to.toLowerCase() !== gLoggedInUser.email.toLowerCase() &&
            !mail.removedAt
        )
        break
      case 'trash':
        mails = mails.filter((mail) => mail.removedAt)
        break
    }
  }

  if (filterBy) {
    mails = mails.filter((mail) => {
      return (
        mail.subject.toLowerCase().includes(filterBy.toLowerCase()) ||
        mail.body.toLowerCase().includes(filterBy.toLowerCase()) ||
        mail.from.toLowerCase().includes(filterBy.toLowerCase())
      )
    })
  }

  return Promise.resolve(mails)
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

function sendMail(mail) {
  let mails = _loadMailsFromStorage()
  mail.id = utilService.makeId()
  mail.isRead = false
  mail.isStarred = false
  mail.from = gLoggedInUser.email
  mails = [mail, ...mails]
  _saveMailsToStorage(mails)
  return Promise.resolve(mail)
}

function getUnreadMailsCount() {
  const mails = _loadMailsFromStorage() || gMails
  let unreadMailsCount = 0
  mails.forEach((mail) => {
    if (!mail.isRead && mail.to === gLoggedInUser.email) unreadMailsCount++
  })

  return unreadMailsCount
}

function _saveMailsToStorage(mails) {
  storageService.saveToStorage(KEY, mails)
}

function _loadMailsFromStorage() {
  return storageService.loadFromStorage(KEY)
}

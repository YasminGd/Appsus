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
    sentAt: new Date(2022, 4, 27).getTime(),
    to: 'user@appsus.com',
    from: 'compliance@google.com',
  },
  {
    id: 'e102',
    subject: 'Tommy Irmia shared "CaJul22-Materials" with you',
    body: 'Tommy Irmia (tommyirmia@gmail.com) invited you to edit the folder "CaJul22-Materials" on Dropbox.',
    isRead: true,
    isStarred: false,
    sentAt: 1551133930594,
    to: 'user@appsus.com',
    from: 'no-reply@dropbox.com',
  },
  {
    id: 'e103',
    subject: 'Order #555346 has been delivered',
    body: 'Thank you for shopping at Stüssy. Your order has been delivered.',
    isRead: false,
    isStarred: true,
    sentAt: new Date(2022, 7, 14).getTime(),
    to: 'user@appsus.com',
    from: 'support@stussy.com',
  },
  {
    id: 'e104',
    subject: 'Reference Code: 20KEA - Date: Wed, 17 Aug 2022',
    body: 'We have received your request to cancel your tickets that you purchased.',
    isRead: true,
    isStarred: false,
    sentAt: new Date(2022, 2, 18).getTime(),
    to: 'noreply@tmisrael.co.il',
    from: 'user@appsus.com',
  },
  {
    id: 'e105',
    subject: 'Your invoice from Apple.',
    body: 'iCloud+ with 2 TB of storage',
    isRead: true,
    isStarred: true,
    sentAt: 1551133930594,
    to: 'no_reply@email.apple.com',
    from: 'user@appsus.com',
  },
  {
    id: 'e106',
    subject: '100% of budget reached',
    body: 'Your billing account "My Billing Account" has reached 100% of the budget',
    isRead: false,
    isStarred: true,
    sentAt: new Date(2022, 5, 21).getTime(),
    to: 'user@appsus.com',
    from: 'CloudPlatform@google.com',
  },
  {
    id: 'e107',
    subject: 'Google is hiring: Software Engineer, Back-End, Waze.',
    body: 'Software Engineer, Back-End, Waze, Google · Tel Aviv, Tel Aviv, Israel',
    isRead: false,
    isStarred: false,
    sentAt: new Date(2022, 6, 14).getTime(),
    to: 'user@appsus.com',
    from: 'jobs-listings@linkedin.com',
  },
  {
    id: 'e108',
    subject: '100% of budget reached',
    body: 'Your billing account "My Billing Account" has reached 100% of the budget',
    isRead: false,
    isStarred: true,
    sentAt: 1551133930594,
    to: 'user@appsus.com',
    from: 'CloudPlatform@google.com',
  },
  {
    id: 'e109',
    subject: 'Barak Treves, Vicky Polatov and 3 others have birthdays today',
    body: 'Today is Barak Treves, Vicky Polatov and 3 others birthday!',
    isRead: true,
    isStarred: false,
    sentAt: 1551133930594,
    to: 'user@appsus.com',
    from: 'birthdays@facebookmail.com',
  },
  {
    id: 'e110',
    subject: 'Your subscription will expire soon',
    body: 'Your Avocode plan was canceled and your billing period will end on August 11, 2022',
    isRead: true,
    isStarred: false,
    sentAt: 1551133930594,
    to: 'notifications@avocode.com',
    from: 'user@appsus.com',
  },
  {
    id: 'e111',
    subject: '15% off 2+ Mounts, Accessories and Lifestyle Gear',
    body: 'OFFER VALID 8/22 - 8/29, 15% Off, 2+ Mounts, Accessories',
    isRead: true,
    isStarred: false,
    sentAt: new Date(2022, 2, 20).getTime(),
    to: 'gopro@e-mail.gopro.com',
    from: 'user@appsus.com',
  },
  {
    id: 'e112',
    subject: 'Future In Your Hands is Out Now!',
    body: 'Hey Bar, How have you been? Im currently enjoying my last days in Europe',
    isRead: true,
    isStarred: true,
    sentAt: 1551133930594,
    to: 'noreply@fangage.com',
    from: 'user@appsus.com',
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

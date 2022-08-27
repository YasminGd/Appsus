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
    subject: 'Coding Academy Sprint 3 DONE!',
    body: 'The sprint is over',
    isRead: false,
    isStarred: true,
    sentAt: new Date(2022, 5, 21).getTime(),
    to: 'user@appsus.com',
    from: 'Coding@academy.co.il',
  },
  {
    id: 'e107',
    subject: 'Google is hiring: Software Engineer, Back-End, Waze.',
    body: 'Software Engineer, Back-End, Waze, Google · Tel Aviv, Tel Aviv, Israel',
    isRead: true,
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
    sentAt: new Date(2022, 9, 10).getTime(),
    to: 'noreply@fangage.com',
    from: 'user@appsus.com',
  },
  {
    id: 'e113',
    subject: 'Say YES to a discount',
    body: 'Your friends, family and dreams are awaiting!',
    isRead: true,
    isStarred: true,
    sentAt: new Date(2022, 10, 5).getTime(),
    to: 'user@appsus.com',
    from: 'wizzair@gmail.com',
  },
  {
    id: 'e114',
    subject: 'ORDER CONFIRMED: Roller Brush Bar',
    body: 'Welcome back Bar! Thanks for another purchase.',
    isRead: false,
    isStarred: true,
    sentAt: new Date(2022, 5, 3).getTime(),
    to: 'user@appsus.com',
    from: 'ebay@ebay.com',
  },
  {
    id: 'e115',
    subject: 'Good news regarding order 8146516189197835',
    body: 'Expect to see your package soon!',
    isRead: true,
    isStarred: false,
    sentAt: 1551133930594,
    to: 'user@appsus.com',
    from: 'transaction@aliexpress.com',
  },
  {
    id: 'e116',
    subject: 'ORDER UPDATE: Roller Brush Bar',
    body: 'Hi Bar, your order is being shipped!',
    isRead: false,
    isStarred: true,
    sentAt: new Date(2022, 2, 29).getTime(),
    to: 'user@appsus.com',
    from: 'ebay@ebay.com',
  },
  {
    id: 'e117',
    subject: 'Invoice CRE00067393,USD -602.24',
    body: 'Dear Client, Attached is the invoice and credit card receipt for trip number: 21100000672',
    isRead: false,
    isStarred: false,
    sentAt: new Date(2022, 10, 17).getTime(),
    to: 'user@appsus.com',
    from: 'AmsalemLogic@amsalem.com',
  },
  {
    id: 'e118',
    subject: 'Someone on the hiring team at Misterbit viewed your profile',
    body: 'You may be contacted for next steps. Good luck!',
    isRead: true,
    isStarred: false,
    sentAt: new Date(2022, 8, 24).getTime(),
    to: 'user@appsus.com',
    from: 'messages@linkedin.com',
  },
  {
    id: 'e119',
    subject: 'Thank you for purchasing tickets for Nora En Pure NYE',
    body: 'Dear Bar Ohayon, Thank you for your purchase. Your confirmation number is 27833936.',
    isRead: true,
    isStarred: true,
    sentAt: new Date(2022, 7, 8).getTime(),
    to: 'user@appsus.com',
    from: 'thebowery@axs.com',
  },
  {
    id: 'e120',
    subject: 'Payment for Order from Amsalem Tours',
    body: 'TOMER VAKNIN has requested a payment. Payment Details: Payment Request ID: 54459 , Due By: 22:23 09/12/2021',
    isRead: false,
    isStarred: false,
    sentAt: new Date(2022, 2, 2).getTime(),
    to: 'user@appsus.com',
    from: 'tickets@amsalem.com',
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

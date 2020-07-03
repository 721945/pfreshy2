import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp()
exports.date = functions.https.onRequest((req, res) => {
  // ...
  res.send('555')
})

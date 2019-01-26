import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDtogwhTCG2CWoe-3Zrtj0J7IX5xYQrgRw',
  authDomain: 'rss-libertas.firebaseapp.com',
  databaseURL: 'https://rss-libertas.firebaseio.com',
  projectId: 'rss-libertas',
  storageBucket: 'rss-libertas.appspot.com',
  messagingSenderId: '860907068980'
}

firebase.initializeApp(config)
const firestore = firebase.firestore()

const list = (collection) => {
  return firestore
    .collection(collection)
    .get()
}

const add = (collection, id, data) => {
  return firestore
    .collection(collection)
    .doc(id)
    .set(data)
}

export default {
  list,
  add
}

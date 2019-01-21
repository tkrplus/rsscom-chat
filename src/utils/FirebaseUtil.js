import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDtogwhTCG2CWoe-3Zrtj0J7IX5xYQrgRw',
  authDomain: 'rss-libertas.firebaseapp.com',
  databaseURL: 'https://rss-libertas.firebaseio.com',
  projectId: 'rss-libertas',
  storageBucket: 'rss-libertas.appspot.com',
  messagingSenderId: '860907068980'
}

firebase.initializeApp(config)

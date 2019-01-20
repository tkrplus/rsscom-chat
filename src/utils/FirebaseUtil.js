import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA_-0upVEcrmnZLTXuzL20cf-X6rqASccQ',
  authDomain: 'realtime-todo-demo.firebaseapp.com',
  databaseURL: 'https://realtime-todo-demo.firebaseio.com',
  projectId: 'realtime-todo-demo',
  storageBucket: 'realtime-todo-demo.appspot.com',
  messagingSenderId: '403516596471'
}

firebase.initializeApp(config)

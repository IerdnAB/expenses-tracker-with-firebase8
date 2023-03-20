import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDA8bzEfe-uUC2xKr3tC30qXr3drp6VtAc",
    authDomain: "myexpenses-e2d27.firebaseapp.com",
    projectId: "myexpenses-e2d27",
    storageBucket: "myexpenses-e2d27.appspot.com",
    messagingSenderId: "335043254219",
    appId: "1:335043254219:web:d4a252991a3989137c084e"
}


//init firebase

firebase.initializeApp(firebaseConfig)

//init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
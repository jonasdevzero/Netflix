import Firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyAfpZXHe-mIZYiIhmRnTRsFWVBJguFrAhY",
    authDomain: "netflix-devzero.firebaseapp.com",
    databaseURL: "https://netflix-devzero.firebaseio.com",
    projectId: "netflix-devzero",
    storageBucket: "netflix-devzero.appspot.com",
    messagingSenderId: "924123774099",
    appId: "1:924123774099:web:9d619e2b3174f9df5a2166"
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDyrRnElWNRtEiYIrxHPM2NV8smQ2dFySM',
  authDomain: 'one-area.firebaseapp.com',
  projectId: 'one-area',
  storageBucket: 'one-area.appspot.com',
  messagingSenderId: '891008893709',
  appId: '1:891008893709:web:892f43f5c7f3d1b9cd6644',
  measurementId: 'G-57KLNCWX32',
}

if (firebase.apps.length < 1) {
  firebase.initializeApp(firebaseConfig)
} else {
  // firebase.apps[0]
}

export default firebase

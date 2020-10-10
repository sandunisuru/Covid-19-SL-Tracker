import * as firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export const newsRef = databaseRef.child("news")
export const latestRef = databaseRef.child("latest")

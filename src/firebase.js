import * as firebase from 'firebase';
import {appSettings} from './appSettings'

const config = {
    apiKey: appSettings.firebaseAPIKey,
    authDomain: appSettings.firebaseAuthDomain,
    databaseURL: appSettings.firebaseDBUrl,
    projectId: appSettings.firebaseProjectId,
    storageBucket: appSettings.firebaseStorageBucket,
    messagingSenderId: appSettings.firebaseMessageSendId,
    appId: appSettings.firebaseAppId,
    measurementId: appSettings.firebaseMeasurementId
}

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export const newsRef = databaseRef.child("news")
export const latestRef = databaseRef.child("latest")

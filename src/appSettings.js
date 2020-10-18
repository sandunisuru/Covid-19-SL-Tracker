export const getSetting = (key) => {
    const value = process.env[key] || null;
    if (value === null) console.error('Missing config key', key);
    return value || '';
};


export const appSettings = {
    firebaseAPIKey: getSetting('REACT_APP_FIREBASE_API_KEY'),
    firebaseAuthDomain: getSetting('REACT_APP_FIREBASE_AUTH_DOMAIN'),
    firebaseDBUrl: getSetting('REACT_APP_FIREBASE_DB_URL'),
    firebaseProjectId: getSetting('REACT_APP_FIREBASE_PROJECT_ID'),
    firebaseStorageBucket: getSetting('REACT_APP_FIREBASE_STORAGE_BUCKET'),
    firebaseMessageSendId: getSetting('REACT_APP_FIREBASE_MESSAGING_SEND_ID'),
    firebaseAppId: getSetting('REACT_APP_FIREBASE_APP_ID'),
    firebaseMeasurementId: getSetting('REACT_APP_FIREBASE_MEASUREMENT_ID'),
};
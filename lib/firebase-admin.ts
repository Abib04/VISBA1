import { initializeApp, getApps, AppOptions } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

// Firebase configuration
const firebaseConfig: AppOptions = {
    databaseURL: 'https://pfgym-eba3a-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize app only if it hasn't been initialized yet
if (!getApps().length) {
    initializeApp(firebaseConfig);
}

// Get database reference
export const db = getDatabase();
export const landingDataRef = db.ref('landing-data');


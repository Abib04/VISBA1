import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || 'https://pfgym-eba3a-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize Firebase app only if it hasn't been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Get database reference
export const database = getDatabase(app);
export const landingDataRef = ref(database, 'landing-data');

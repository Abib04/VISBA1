import { NextResponse } from 'next/server';
import { landingDataRef } from '@/lib/firebase';
import { get, set } from 'firebase/database';

// Default data
const defaultData = {
    date: "24 - 25 Februari 2026",
    time: "09:00 - 16:00 WIB",
    location: "Hotel Grand Mercure, Kemayoran, Jakarta"
};

// GET: Read data from Firebase
export async function GET() {
    try {
        const snapshot = await get(landingDataRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            return NextResponse.json(data);
        } else {
            // Return default data if nothing in database
            return NextResponse.json(defaultData);
        }
    } catch (error) {
        console.error('Error reading from Firebase:', error);
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

// POST: Update data in Firebase
export async function POST(request: Request) {
    try {
        const newData = await request.json();

        // Basic validation
        if (!newData.date || !newData.time || !newData.location) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Save to Firebase Realtime Database
        await set(landingDataRef, newData);

        return NextResponse.json({ success: true, data: newData });
    } catch (error) {
        console.error('Error saving to Firebase:', error);
        return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
    }
}


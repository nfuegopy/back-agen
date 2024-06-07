import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
    private db: admin.firestore.Firestore;

    constructor(@Inject('FIREBASE_ADMIN') private readonly firebaseAdmin: admin.app.App) {
        this.db = firebaseAdmin.firestore();
    }

    getFirestore() {
        return this.db;
    }
}

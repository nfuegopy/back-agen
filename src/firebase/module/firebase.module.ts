import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FirebaseService } from '../service/firebase.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [ConfigModule],
    providers: [
        FirebaseService,
        {
            provide: 'FIREBASE_ADMIN',
            useFactory: (configService: ConfigService) => {
                const adminConfig = {
                    credential: admin.credential.cert({
                        projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
                        privateKey: configService.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
                        clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
                    }),
                    databaseURL: configService.get<string>('FIREBASE_DATABASE_URL'),
                };
                return admin.initializeApp(adminConfig);
            },
            inject: [ConfigService],
        },
    ],
    exports: ['FIREBASE_ADMIN', FirebaseService],
})
export class FirebaseModule { }

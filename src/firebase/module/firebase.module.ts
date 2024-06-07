import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { FirebaseService } from '../service/firebase.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    FirebaseService,
    {
      provide: 'FIREBASE_ADMIN',
      useFactory: (configService: ConfigService) => {
        const projectId = configService.get<string>('FIREBASE_PROJECT_ID');
        const privateKey = configService.get<string>('FIREBASE_PRIVATE_KEY')?.replace(/\\n/g, '\n');
        const clientEmail = configService.get<string>('FIREBASE_CLIENT_EMAIL');

        console.log('FIREBASE_PROJECT_ID:', projectId);
        console.log('FIREBASE_PRIVATE_KEY:', privateKey);
        console.log('FIREBASE_CLIENT_EMAIL:', clientEmail);

        if (!projectId || !privateKey || !clientEmail) {
          throw new Error('Firebase environment variables are not set correctly');
        }

        const adminConfig = {
          credential: admin.credential.cert({
            projectId: projectId,
            privateKey: privateKey,
            clientEmail: clientEmail,
          }),
        };
        return admin.initializeApp(adminConfig);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['FIREBASE_ADMIN', FirebaseService],
})
export class FirebaseModule {}

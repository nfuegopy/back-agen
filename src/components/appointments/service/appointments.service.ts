import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../../firebase/service/firebase.service';

@Injectable()
export class AppointmentsService {
    constructor(private readonly firebaseService: FirebaseService) { }

    async getAllAppointments() {
        const snapshot = await this.firebaseService.getFirestore().collection('appointments').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    async createAppointment(appointmentData: any) {
        const appointment = await this.firebaseService.getFirestore().collection('appointments').add(appointmentData);
        return { id: appointment.id, ...appointmentData };
    }
}

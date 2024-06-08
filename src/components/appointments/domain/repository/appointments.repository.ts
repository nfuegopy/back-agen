import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../../../firebase/service/firebase.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { Appointment } from '../models/appointment.model';

@Injectable()
export class AppointmentsRepository {
    constructor(private readonly firebaseService: FirebaseService) { }

    async findAll(): Promise<Appointment[]> {
        const snapshot = await this.firebaseService.getFirestore().collection('appointments').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Appointment[];
    }

    async findById(id: string): Promise<Appointment> {
        const doc = await this.firebaseService.getFirestore().collection('appointments').doc(id).get();
        return { id: doc.id, ...doc.data() } as Appointment;
    }

    async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
        const appointmentData = { ...createAppointmentDto } as any; // Asegúrate de que el tipo sea compatible
        const docRef = await this.firebaseService.getFirestore().collection('appointments').add(appointmentData);
        return { id: docRef.id, ...createAppointmentDto };
    }

    async update(id: string, updateAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
        const appointmentData = { ...updateAppointmentDto } as any; // Asegúrate de que el tipo sea compatible
        await this.firebaseService.getFirestore().collection('appointments').doc(id).update(appointmentData);
        const updatedDoc = await this.findById(id);
        return updatedDoc;
    }

    async delete(id: string): Promise<void> {
        await this.firebaseService.getFirestore().collection('appointments').doc(id).delete();
    }
}

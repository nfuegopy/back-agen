import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../../../firebase/service/firebase.service';
import { CreateAppointmentTypeDto } from '../dto/create-appointment-type.dto';
import { AppointmentType } from '../models/appointment-type.model';

@Injectable()
export class AppointmentTypesRepository {
    constructor(private readonly firebaseService: FirebaseService) { }

    async findAll(): Promise<AppointmentType[]> {
        const snapshot = await this.firebaseService.getFirestore().collection('appointmentTypes').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as AppointmentType[];
    }

    async findById(id: string): Promise<AppointmentType> {
        const doc = await this.firebaseService.getFirestore().collection('appointmentTypes').doc(id).get();
        return { id: doc.id, ...doc.data() } as AppointmentType;
    }

    async create(createAppointmentTypeDto: CreateAppointmentTypeDto): Promise<AppointmentType> {
        const appointmentTypeData = { ...createAppointmentTypeDto } as any;
        const docRef = await this.firebaseService.getFirestore().collection('appointmentTypes').add(appointmentTypeData);
        return { id: docRef.id, ...createAppointmentTypeDto };
    }

    async update(id: string, updateAppointmentTypeDto: CreateAppointmentTypeDto): Promise<AppointmentType> {
        const appointmentTypeData = { ...updateAppointmentTypeDto } as any;
        await this.firebaseService.getFirestore().collection('appointmentTypes').doc(id).update(appointmentTypeData);
        const updatedDoc = await this.findById(id);
        return updatedDoc;
    }

    async delete(id: string): Promise<void> {
        await this.firebaseService.getFirestore().collection('appointmentTypes').doc(id).delete();
    }
}

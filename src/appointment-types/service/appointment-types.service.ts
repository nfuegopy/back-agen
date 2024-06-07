import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../firebase/service/firebase.service';
import { CreateAppointmentTypeDto } from '../dto/create-appointment-type.dto';

@Injectable()
export class AppointmentTypesService {
    constructor(private readonly firebaseService: FirebaseService) { }

    async getAllAppointmentTypes() {
        const snapshot = await this.firebaseService.getFirestore().collection('appointmentTypes').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    async createAppointmentType(createAppointmentTypeDto: CreateAppointmentTypeDto) {
        const appointmentType = await this.firebaseService.getFirestore().collection('appointmentTypes').add(createAppointmentTypeDto);
        return { id: appointmentType.id, ...createAppointmentTypeDto };
    }
}

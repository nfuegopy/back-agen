import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../firebase/service/firebase.service';
import { CreatePatientDto } from '../dto/create-patient.dto';

@Injectable()
export class PatientsService {
    constructor(private readonly firebaseService: FirebaseService) { }

    async getAllPatients() {
        const snapshot = await this.firebaseService.getFirestore().collection('patients').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    async createPatient(createPatientDto: CreatePatientDto) {
        const patient = await this.firebaseService.getFirestore().collection('patients').add(createPatientDto);
        return { id: patient.id, ...createPatientDto };
    }
}

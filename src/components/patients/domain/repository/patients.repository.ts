import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../.././../../firebase/service/firebase.service';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { Patient } from '../../domain/models/patient.model';

@Injectable()
export class PatientsRepository {
    constructor(private readonly firebaseService: FirebaseService) { }

    async findAll(): Promise<Patient[]> {
        const snapshot = await this.firebaseService.getFirestore().collection('patients').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Patient[];
    }

    async findById(id: string): Promise<Patient> {
        const doc = await this.firebaseService.getFirestore().collection('patients').doc(id).get();
        return { id: doc.id, ...doc.data() } as Patient;
    }

    async create(createPatientDto: CreatePatientDto): Promise<Patient> {
        const patientData = { ...createPatientDto } as any;
        const docRef = await this.firebaseService.getFirestore().collection('patients').add(patientData);
        return { id: docRef.id, ...createPatientDto };
    }

    async update(id: string, updatePatientDto: CreatePatientDto): Promise<Patient> {
        const patientData = { ...updatePatientDto } as any;
        await this.firebaseService.getFirestore().collection('patients').doc(id).update(patientData);
        const updatedDoc = await this.findById(id);
        return updatedDoc;
    }

    async delete(id: string): Promise<void> {
        await this.firebaseService.getFirestore().collection('patients').doc(id).delete();
    }
}

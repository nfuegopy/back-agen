import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../../../firebase/service/firebase.service';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { Doctor } from '../models/doctor.model';

@Injectable()
export class DoctorsRepository {
    constructor(private readonly firebaseService: FirebaseService) { }

    async findAll(): Promise<Doctor[]> {
        const snapshot = await this.firebaseService.getFirestore().collection('doctors').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Doctor[];
    }

    async findById(id: string): Promise<Doctor> {
        const doc = await this.firebaseService.getFirestore().collection('doctors').doc(id).get();
        return { id: doc.id, ...doc.data() } as Doctor;
    }

    async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
        const doctorData = { ...createDoctorDto } as any;
        const docRef = await this.firebaseService.getFirestore().collection('doctors').add(doctorData);
        return { id: docRef.id, ...createDoctorDto };
    }

    async update(id: string, updateDoctorDto: CreateDoctorDto): Promise<Doctor> {
        const doctorData = { ...updateDoctorDto } as any;
        await this.firebaseService.getFirestore().collection('doctors').doc(id).update(doctorData);
        const updatedDoc = await this.findById(id);
        return updatedDoc;
    }

    async delete(id: string): Promise<void> {
        await this.firebaseService.getFirestore().collection('doctors').doc(id).delete();
    }
}

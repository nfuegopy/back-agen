import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../firebase/service/firebase.service';
import { CreateDoctorDto } from '../dto/create-doctor.dto';

@Injectable()
export class DoctorsService {
    constructor(private readonly firebaseService: FirebaseService) { }

    async getAllDoctors() {
        const snapshot = await this.firebaseService.getFirestore().collection('doctors').get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    async createDoctor(createDoctorDto: CreateDoctorDto) {
        const doctor = await this.firebaseService.getFirestore().collection('doctors').add(createDoctorDto);
        return { id: doctor.id, ...createDoctorDto };
    }
}

import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../../firebase/service/firebase.service';
import { CreatePatientDto } from '../domain/dto/create-patient.dto';
import { PatientsRepository } from '../domain/repository/patients.repository';

@Injectable()
export class PatientsService {
    constructor(private readonly patientsRepository: PatientsRepository) { }

    getAllPatients() {
        return this.patientsRepository.findAll();
    }

    getPatientById(id: string) {
        return this.patientsRepository.findById(id);
    }

    createPatient(createPatientDto: CreatePatientDto) {
        return this.patientsRepository.create(createPatientDto);
    }

    updatePatient(id: string, updatePatientDto: CreatePatientDto) {
        return this.patientsRepository.update(id, updatePatientDto);
    }

    deletePatient(id: string) {
        return this.patientsRepository.delete(id);
    }
}

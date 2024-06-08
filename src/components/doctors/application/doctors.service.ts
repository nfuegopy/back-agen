import { Injectable } from '@nestjs/common';
import { DoctorsRepository } from '../domain/repository/doctors.repository';
import { CreateDoctorDto } from '../domain/dto/create-doctor.dto';

@Injectable()
export class DoctorsService {
    constructor(private readonly doctorsRepository: DoctorsRepository) { }

    getAllDoctors() {
        return this.doctorsRepository.findAll();
    }

    getDoctorById(id: string) {
        return this.doctorsRepository.findById(id);
    }

    createDoctor(createDoctorDto: CreateDoctorDto) {
        return this.doctorsRepository.create(createDoctorDto);
    }

    updateDoctor(id: string, updateDoctorDto: CreateDoctorDto) {
        return this.doctorsRepository.update(id, updateDoctorDto);
    }

    deleteDoctor(id: string) {
        return this.doctorsRepository.delete(id);
    }
}

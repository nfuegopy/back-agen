import { Injectable } from '@nestjs/common';
import { AppointmentTypesRepository } from '../domain/repository/appointment-types.repository';
import { CreateAppointmentTypeDto } from '../domain/dto/create-appointment-type.dto';

@Injectable()
export class AppointmentTypesService {
    constructor(private readonly appointmentTypesRepository: AppointmentTypesRepository) { }

    getAllAppointmentTypes() {
        return this.appointmentTypesRepository.findAll();
    }

    getAppointmentTypeById(id: string) {
        return this.appointmentTypesRepository.findById(id);
    }

    createAppointmentType(createAppointmentTypeDto: CreateAppointmentTypeDto) {
        return this.appointmentTypesRepository.create(createAppointmentTypeDto);
    }

    updateAppointmentType(id: string, updateAppointmentTypeDto: CreateAppointmentTypeDto) {
        return this.appointmentTypesRepository.update(id, updateAppointmentTypeDto);
    }

    deleteAppointmentType(id: string) {
        return this.appointmentTypesRepository.delete(id);
    }
}

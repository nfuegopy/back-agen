import { Injectable } from '@nestjs/common';
import { AppointmentsRepository } from '../domain/repository/appointments.repository';
import { CreateAppointmentDto } from '../domain/dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
    constructor(private readonly appointmentsRepository: AppointmentsRepository) { }

    getAllAppointments() {
        return this.appointmentsRepository.findAll();
    }

    getAppointmentById(id: string) {
        return this.appointmentsRepository.findById(id);
    }

    createAppointment(createAppointmentDto: CreateAppointmentDto) {
        return this.appointmentsRepository.create(createAppointmentDto);
    }

    updateAppointment(id: string, updateAppointmentDto: CreateAppointmentDto) {
        return this.appointmentsRepository.update(id, updateAppointmentDto);
    }

    deleteAppointment(id: string) {
        return this.appointmentsRepository.delete(id);
    }
}

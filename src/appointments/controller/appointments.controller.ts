import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppointmentsService } from '../service/appointments.service';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) { }

    @Get()
    getAllAppointments() {
        return this.appointmentsService.getAllAppointments();
    }

    @Post()
    createAppointment(@Body() appointmentData: any) {
        return this.appointmentsService.createAppointment(appointmentData);
    }
}

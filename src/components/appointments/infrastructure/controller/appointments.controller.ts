import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AppointmentsService } from '../../application/appointments.service';
import { CreateAppointmentDto } from '../../domain/dto/create-appointment.dto';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly appointmentsService: AppointmentsService) { }

    @Get()
    async getAllAppointments() {
        const appointments = await this.appointmentsService.getAllAppointments();
        return {
            message: 'Todas las citas obtenidas correctamente',
            data: appointments,
        };
    }

    @Get(':id')
    async getAppointmentById(@Param('id') id: string) {
        const appointment = await this.appointmentsService.getAppointmentById(id);
        return {
            message: 'Cita obtenida correctamente',
            data: appointment,
        };
    }

    @Post()
    async createAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
        const appointment = await this.appointmentsService.createAppointment(createAppointmentDto);
        return {
            message: 'Cita creada correctamente',
            data: appointment,
        };
    }

    @Put(':id')
    async updateAppointment(@Param('id') id: string, @Body() updateAppointmentDto: CreateAppointmentDto) {
        const appointment = await this.appointmentsService.updateAppointment(id, updateAppointmentDto);
        return {
            message: 'Cita actualizada correctamente',
            data: appointment,
        };
    }

    @Delete(':id')
    async deleteAppointment(@Param('id') id: string) {
        await this.appointmentsService.deleteAppointment(id);
        return {
            message: 'Cita eliminada correctamente',
        };
    }
}

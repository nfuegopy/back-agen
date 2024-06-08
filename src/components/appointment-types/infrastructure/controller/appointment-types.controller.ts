import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AppointmentTypesService } from '../../application/appointment-types.service';
import { CreateAppointmentTypeDto } from '../../domain/dto/create-appointment-type.dto';

@Controller('appointment-types')
export class AppointmentTypesController {
    constructor(private readonly appointmentTypesService: AppointmentTypesService) { }

    @Get()
    async getAllAppointmentTypes() {
        const appointmentTypes = await this.appointmentTypesService.getAllAppointmentTypes();
        return {
            message: 'Todos los tipos de citas obtenidos correctamente',
            data: appointmentTypes,
        };
    }

    @Get(':id')
    async getAppointmentTypeById(@Param('id') id: string) {
        const appointmentType = await this.appointmentTypesService.getAppointmentTypeById(id);
        return {
            message: 'Tipo de cita obtenido correctamente',
            data: appointmentType,
        };
    }

    @Post()
    async createAppointmentType(@Body() createAppointmentTypeDto: CreateAppointmentTypeDto) {
        const appointmentType = await this.appointmentTypesService.createAppointmentType(createAppointmentTypeDto);
        return {
            message: 'Tipo de cita creado correctamente',
            data: appointmentType,
        };
    }

    @Put(':id')
    async updateAppointmentType(@Param('id') id: string, @Body() updateAppointmentTypeDto: CreateAppointmentTypeDto) {
        const appointmentType = await this.appointmentTypesService.updateAppointmentType(id, updateAppointmentTypeDto);
        return {
            message: 'Tipo de cita actualizado correctamente',
            data: appointmentType,
        };
    }

    @Delete(':id')
    async deleteAppointmentType(@Param('id') id: string) {
        await this.appointmentTypesService.deleteAppointmentType(id);
        return {
            message: 'Tipo de cita eliminado correctamente',
        };
    }
}

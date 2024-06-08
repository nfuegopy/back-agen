import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppointmentTypesService } from '../service/appointment-types.service';
import { CreateAppointmentTypeDto } from '../dto/create-appointment-type.dto';

@Controller('appointment-types')
export class AppointmentTypesController {
    constructor(private readonly appointmentTypesService: AppointmentTypesService) { }

    @Get()
    getAllAppointmentTypes() {
        return this.appointmentTypesService.getAllAppointmentTypes();
    }

    @Post()
    createAppointmentType(@Body() createAppointmentTypeDto: CreateAppointmentTypeDto) {
        return this.appointmentTypesService.createAppointmentType(createAppointmentTypeDto);
    }
}

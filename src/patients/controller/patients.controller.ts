import { Controller, Get, Post, Body } from '@nestjs/common';
import { PatientsService } from '../service/patients.service';
import { CreatePatientDto } from '../dto/create-patient.dto';

@Controller('patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) { }

    @Get()
    getAllPatients() {
        return this.patientsService.getAllPatients();
    }

    @Post()
    createPatient(@Body() createPatientDto: CreatePatientDto) {
        return this.patientsService.createPatient(createPatientDto);
    }
}

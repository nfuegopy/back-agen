import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PatientsService } from '../../application/patients.service';
import { CreatePatientDto } from '../../domain/dto/create-patient.dto';

@Controller('patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) { }

    @Get()
    async getAllPatients() {
        const patients = await this.patientsService.getAllPatients();
        return {
            message: 'Todos los pacientes obtenidos correctamente',
            data: patients,
        };
    }

    @Get(':id')
    async getPatientById(@Param('id') id: string) {
        const patient = await this.patientsService.getPatientById(id);
        return {
            message: 'Paciente obtenido correctamente',
            data: patient,
        };
    }

    @Post()
    async createPatient(@Body() createPatientDto: CreatePatientDto) {
        const patient = await this.patientsService.createPatient(createPatientDto);
        return {
            message: 'Paciente creado correctamente',
            data: patient,
        };
    }

    @Put(':id')
    async updatePatient(@Param('id') id: string, @Body() updatePatientDto: CreatePatientDto) {
        const patient = await this.patientsService.updatePatient(id, updatePatientDto);
        return {
            message: 'Paciente actualizado correctamente',
            data: patient,
        };
    }

    @Delete(':id')
    async deletePatient(@Param('id') id: string) {
        await this.patientsService.deletePatient(id);
        return {
            message: 'Paciente eliminado correctamente',
        };
    }
}

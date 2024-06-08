import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DoctorsService } from '../../application/doctors.service';
import { CreateDoctorDto } from '../../domain/dto/create-doctor.dto';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) { }

    @Get()
    async getAllDoctors() {
        const doctors = await this.doctorsService.getAllDoctors();
        return {
            message: 'Todos los doctores obtenidos correctamente',
            data: doctors,
        };
    }

    @Get(':id')
    async getDoctorById(@Param('id') id: string) {
        const doctor = await this.doctorsService.getDoctorById(id);
        return {
            message: 'Doctor obtenido correctamente',
            data: doctor,
        };
    }

    @Post()
    async createDoctor(@Body() createDoctorDto: CreateDoctorDto) {
        const doctor = await this.doctorsService.createDoctor(createDoctorDto);
        return {
            message: 'Doctor creado correctamente',
            data: doctor,
        };
    }

    @Put(':id')
    async updateDoctor(@Param('id') id: string, @Body() updateDoctorDto: CreateDoctorDto) {
        const doctor = await this.doctorsService.updateDoctor(id, updateDoctorDto);
        return {
            message: 'Doctor actualizado correctamente',
            data: doctor,
        };
    }

    @Delete(':id')
    async deleteDoctor(@Param('id') id: string) {
        await this.doctorsService.deleteDoctor(id);
        return {
            message: 'Doctor eliminado correctamente',
        };
    }
}

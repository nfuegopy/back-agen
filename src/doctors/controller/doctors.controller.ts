import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctorsService } from '../service/doctors.service';
import { CreateDoctorDto } from '../dto/create-doctor.dto';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) { }

    @Get()
    getAllDoctors() {
        return this.doctorsService.getAllDoctors();
    }

    @Post()
    createDoctor(@Body() createDoctorDto: CreateDoctorDto) {
        return this.doctorsService.createDoctor(createDoctorDto);
    }
}

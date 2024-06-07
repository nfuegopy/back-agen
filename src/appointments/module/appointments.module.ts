import { Module } from '@nestjs/common';
import { AppointmentsController } from '../controller/appointments.controller';
import { AppointmentsService } from '../service/appointments.service';
import { FirebaseModule } from '../../firebase/module/firebase.module';
import { PatientsModule } from '../../patients/module/patients.module';
import { DoctorsModule } from '../../doctors/module/doctors.module';
import { AppointmentTypesModule } from '../../appointment-types/module/appointment-types.module';

@Module({
    imports: [FirebaseModule, PatientsModule, DoctorsModule, AppointmentTypesModule],
    controllers: [AppointmentsController],
    providers: [AppointmentsService],
})
export class AppointmentsModule { }

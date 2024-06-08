import { Module } from '@nestjs/common';
import { AppointmentsController } from '../controller/appointments.controller';
import { AppointmentsService } from '../service/appointments.service';
import { FirebaseModule } from '../../../firebase/module/firebase.module';
import { PatientsModule } from '../../patients/infrastructure/module/patients.module';
import { DoctorsModule } from '../../doctors/infrastructure/module/doctors.module';
import { AppointmentTypesModule } from '../../appointment-types/module/appointment-types.module';

@Module({
    imports: [FirebaseModule, PatientsModule, DoctorsModule, AppointmentTypesModule],
    controllers: [AppointmentsController],
    providers: [AppointmentsService],
})
export class AppointmentsModule { }

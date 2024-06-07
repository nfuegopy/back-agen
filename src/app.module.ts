import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppointmentsModule } from './appointments/module/appointments.module';
import { PatientsModule } from './patients/module/patients.module';
import { DoctorsModule } from './doctors/module/doctors.module';
import { AppointmentTypesModule } from './appointment-types/module/appointment-types.module';
import { FirebaseModule } from './firebase/module/firebase.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AppointmentsModule,
    PatientsModule,
    DoctorsModule,
    AppointmentTypesModule,
    FirebaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppointmentsModule } from './components/appointments/infrastructure/module/appointments.module';
import { PatientsModule } from './components/patients/infrastructure/module/patients.module';
import { DoctorsModule } from './components/doctors/infrastructure/module/doctors.module';
import { AppointmentTypesModule } from './components/appointment-types/infrastructure/module/appointment-types.module';
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

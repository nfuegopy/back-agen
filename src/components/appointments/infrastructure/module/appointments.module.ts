import { Module } from '@nestjs/common';
import { AppointmentsController } from '../../infrastructure/controller/appointments.controller';
import { AppointmentsService } from '../../application/appointments.service';
import { FirebaseModule } from '../../../../firebase/module/firebase.module';
import { AppointmentsRepository } from '../../domain/repository/appointments.repository';

@Module({
    imports: [FirebaseModule],
    controllers: [AppointmentsController],
    providers: [AppointmentsService, AppointmentsRepository],
})
export class AppointmentsModule { }

import { Module } from '@nestjs/common';
import { AppointmentTypesController } from '../../infrastructure/controller/appointment-types.controller';
import { AppointmentTypesService } from '../../application/appointment-types.service';
import { FirebaseModule } from '../../../../firebase/module/firebase.module';
import { AppointmentTypesRepository } from '../../domain/repository/appointment-types.repository';

@Module({
    imports: [FirebaseModule],
    controllers: [AppointmentTypesController],
    providers: [AppointmentTypesService, AppointmentTypesRepository],
})
export class AppointmentTypesModule { }

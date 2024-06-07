import { Module } from '@nestjs/common';
import { AppointmentTypesController } from '../controller/appointment-types.controller';
import { AppointmentTypesService } from '../service/appointment-types.service';
import { FirebaseModule } from '../../firebase/module/firebase.module';

@Module({
    imports: [FirebaseModule],
    controllers: [AppointmentTypesController],
    providers: [AppointmentTypesService],
})
export class AppointmentTypesModule { }

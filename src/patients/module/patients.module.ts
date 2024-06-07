import { Module } from '@nestjs/common';
import { PatientsController } from '../controller/patients.controller';
import { PatientsService } from '../service/patients.service';
import { FirebaseModule } from '../../firebase/module/firebase.module';

@Module({
    imports: [FirebaseModule],
    controllers: [PatientsController],
    providers: [PatientsService],
})
export class PatientsModule { }

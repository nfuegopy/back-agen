import { Module } from '@nestjs/common';
import { PatientsController } from '../../infrastructure/controller/patients.controller';
import { PatientsService } from '../../application/patients.service';
import { FirebaseModule } from '../../../../firebase/module/firebase.module';
import { PatientsRepository } from '../../domain/repository/patients.repository';

@Module({
    imports: [FirebaseModule],
    controllers: [PatientsController],
    providers: [PatientsService, PatientsRepository],
})
export class PatientsModule { }

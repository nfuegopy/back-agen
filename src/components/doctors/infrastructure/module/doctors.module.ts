import { Module } from '@nestjs/common';
import { DoctorsController } from '../../infrastructure/controller/doctors.controller';
import { DoctorsService } from '../../application/doctors.service';
import { FirebaseModule } from '../../../../firebase/module/firebase.module';
import { DoctorsRepository } from '../../domain/repository/doctors.repository';

@Module({
    imports: [FirebaseModule],
    controllers: [DoctorsController],
    providers: [DoctorsService, DoctorsRepository],
})
export class DoctorsModule { }

import { Module } from '@nestjs/common';
import { DoctorsController } from '../controller/doctors.controller';
import { DoctorsService } from '../service/doctors.service';
import { FirebaseModule } from '../../firebase/module/firebase.module';

@Module({
    imports: [FirebaseModule],
    controllers: [DoctorsController],
    providers: [DoctorsService],
})
export class DoctorsModule { }

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS
  app.enableCors({
    origin: '*', // Permitir solicitudes desde cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000; // Obtener el puerto de la variable de entorno o usar 3000 por defecto
  await app.listen(port);

  const appUrl = await app.getUrl(); // Obtener la URL después de que la aplicación esté escuchando
  console.log(`Application is running on: ${appUrl}`);
}


bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const configService = app.get(ConfigService);
  const port = process.env.PORT || 3000;
  await app.listen(port);

  const appUrl = await app.getUrl(); // Obtener la URL después de que la aplicación esté escuchando
  console.log(`Application is running on: ${appUrl}`);
}

bootstrap();

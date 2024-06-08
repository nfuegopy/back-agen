import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',//nueva subida
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const configService = app.get(ConfigService);
  const port = process.env.PORT || 3000;
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();

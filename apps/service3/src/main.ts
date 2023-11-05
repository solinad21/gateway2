import { NestFactory } from '@nestjs/core';
import { Service3Module } from './service3.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Service3Module,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();

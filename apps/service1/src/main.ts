import { NestFactory } from '@nestjs/core';
import { Service1Module } from './service1.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //const app = await NestFactory.create(Service1Module);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Service1Module,
    {
      transport: Transport.TCP,options: {
        port: 8871
      }
    },
  );
  await app.listen();  
}
bootstrap();

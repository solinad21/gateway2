import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_MAILS', transport: Transport.TCP,options: {
          port: 8871
        }
      }
    ]),
    ClientsModule.register([
      {
        name: 'SERVICE_FACTURACION', transport: Transport.TCP,options: {
          port: 8872
        }
      }
    ]),
    ClientsModule.register([
      {
        name: 'SERVICE_TABLAS', transport: Transport.TCP,options: {
          port: 8873
        }
      }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

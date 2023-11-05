import { Controller, Get } from '@nestjs/common';
import { Service2Service } from './service2.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class Service2Controller {
  constructor(private readonly service2Service: Service2Service) {}

  @MessagePattern({ cmd: 'service_2' })
  servicio2(data: any) {
    return this.service2Service.getHello(data);
  }
}

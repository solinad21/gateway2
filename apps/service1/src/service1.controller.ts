import { Controller, Get } from '@nestjs/common';
import { Service1Service } from './service1.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class Service1Controller {
  constructor(private readonly service1Service: Service1Service) {}

  @MessagePattern({ cmd: 'service_1' })
  servicio1(data: any) {    
    return this.service1Service.getHello(data);
  }
}

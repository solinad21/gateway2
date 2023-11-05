import { Controller, Get } from '@nestjs/common';
import { Service3Service } from './service3.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class Service3Controller {
  constructor(private readonly service3Service: Service3Service) {}

  @MessagePattern({ cmd: 'service_3' })
  servicio3(data: any) {
    return this.service3Service.getHello(data);
  }
}

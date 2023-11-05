import { Body, Controller, Get, Post, HttpException, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('MAIN_SERVICE') private client: ClientProxy,
    private readonly appService: AppService) { }


  @Post('service1')
  async service1(@Body() body: any): Promise<any> {
    const pattern = { cmd: 'service_1' };
    const payload = { name: body.name };
    var ret = this.client.send<any>(pattern, payload);
    if (ret) {
      return ret;
    }
    throw new HttpException('Error: Error indeterminado', 401);
  }

  @Post('service2')
  async service2(@Body() body: any): Promise<any> {
    const pattern = { cmd: 'service_2' };
    const payload = { name: body.name };
    var ret = this.client.send<any>(pattern, payload);
    if (ret) {
      return ret;
    }
    throw new HttpException('Error: Error indeterminado', 401);
  }

  @Post('service3')
  async service3(@Body() body: any): Promise<any> {
    const pattern = { cmd: 'service_3' };
    const payload = { name: body.name };
    var ret = this.client.send<any>(pattern, payload);
    if (ret) {
      return ret;
    }
    throw new HttpException('Error: Error indeterminado', 401);
  }


}

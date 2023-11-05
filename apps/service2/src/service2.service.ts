import { Injectable } from '@nestjs/common';

@Injectable()
export class Service2Service {
  getHello(data:any): string {
    return 'Hello World From service2! by: ' + data.name;
  }
}

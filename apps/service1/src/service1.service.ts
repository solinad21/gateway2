import { Injectable } from '@nestjs/common';

@Injectable()
export class Service1Service {
  getHello(data: any): string {
    return 'Hello World From service1! by: ' + data.name;
  }
}

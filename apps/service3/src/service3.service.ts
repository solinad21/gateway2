import { Injectable } from '@nestjs/common';

@Injectable()
export class Service3Service {
  getHello(data: any): string {
    return 'Hello World From service3! by: ' + data.name;
  }
}

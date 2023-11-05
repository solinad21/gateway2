import { Module } from '@nestjs/common';
import { Service2Controller } from './service2.controller';
import { Service2Service } from './service2.service';

@Module({
  imports: [],
  controllers: [Service2Controller],
  providers: [Service2Service],
})
export class Service2Module {}

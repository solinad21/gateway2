import { Module } from '@nestjs/common';
import { Service1Controller } from './service1.controller';
import { Service1Service } from './service1.service';

@Module({
  imports: [],
  controllers: [Service1Controller],
  providers: [Service1Service],
})
export class Service1Module {}

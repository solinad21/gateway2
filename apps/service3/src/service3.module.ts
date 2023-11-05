import { Module } from '@nestjs/common';
import { Service3Controller } from './service3.controller';
import { Service3Service } from './service3.service';

@Module({
  imports: [],
  controllers: [Service3Controller],
  providers: [Service3Service],
})
export class Service3Module {}

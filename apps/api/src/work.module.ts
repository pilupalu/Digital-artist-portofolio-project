import { Module } from '@nestjs/common';
import { WorkController } from './work.controller';
import { WorkService } from './work.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkSchema } from './work.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Work.name, schema: WorkSchema }]),
    WorkModule
],
  controllers: [WorkController],
  providers: [WorkService],
  exports: [WorkService],
})
export class WorkModule {
  constructor() {
    console.log('WorkModule loaded');
    console.log('MongooseModule.forFeature:', MongooseModule.forFeature([{ name: Work.name, schema: WorkSchema }]));
  }
}
import { Injectable } from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Work, WorkDocument } from './work.entity';
import { CreateWorkDto } from './create-work.dto';

@Injectable()
export class WorkService {
  // Inject both the Work model and the Connection
  constructor(
    @InjectModel(Work.name) private workModel: Model<WorkDocument>,
    @InjectConnection() private connection: Connection,
  ) {
    console.log('WorkModel:', workModel);
    console.log('Database Connection:', connection);
  }

  async create(createWorkDto: CreateWorkDto): Promise<Work> {
    const createdWork = new this.workModel(createWorkDto);
    return createdWork.save();
  }

  async findAll(): Promise<Work[]> {
    return this.workModel.find().exec();
  }

  async findOne(id: string): Promise<Work> {
    return this.workModel.findById(id).exec();
  }

  async update(id: string, updateWorkDto: CreateWorkDto): Promise<Work> {
    return this.workModel.findByIdAndUpdate(id, updateWorkDto, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.workModel.findByIdAndDelete(id).exec();
  }
}

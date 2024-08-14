import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { WorkService } from './work.service';
import { Work } from './work.entity';

@Controller('works')
export class WorkController {
    constructor(private readonly workService: WorkService) {}

    @Post()
    async create(@Body() work: Work): Promise<Work> {
        return this.workService.create(work);
    }

    @Get()
    async findAll(): Promise<Work[]> {
        return this.workService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Work> {
        return this.workService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() work: Work): Promise<Work> {
        return this.workService.update(id, work);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.workService.delete(id);
    }
}
import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from '../database/';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async get(@Res() res): Promise<TaskEntity[]> {
    const tasks = await this.tasksService.findAll();
    return res.status(HttpStatus.OK).json(tasks);
  }

  @Post()
  async create(@Body() body, @Res() res): Promise<TaskEntity> {
    await this.tasksService.create();
    return res.status(HttpStatus.CREATED).send();
  }
}

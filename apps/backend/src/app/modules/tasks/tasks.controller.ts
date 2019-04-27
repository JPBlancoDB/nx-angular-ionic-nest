import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from '../database/';
import { Task } from '@tasks/contracts';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async get(): Promise<Task[]> {
    return await this.tasksService.findAll();
  }

  @Post()
  async create(@Body() body, @Res() res): Promise<TaskEntity> {
    await this.tasksService.create();
    return res.status(HttpStatus.CREATED).send();
  }
}

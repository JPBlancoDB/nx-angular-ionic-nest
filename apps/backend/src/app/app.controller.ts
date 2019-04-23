import { Controller, Get } from '@nestjs/common';
import { Task } from '@tasks/contracts';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tasks')
  getData(): Task {
    return this.appService.getData();
  }
}

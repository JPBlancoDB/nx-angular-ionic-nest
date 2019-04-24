import { Module } from '@nestjs/common';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { tasksProviders } from './tasks.provider';
import { DatabaseModule } from '../database';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [TasksService, tasksProviders]
})
export class TasksModule {}

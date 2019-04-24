import { Module } from '@nestjs/common';

import { DatabaseModule, TasksModule } from './modules';

@Module({
  imports: [DatabaseModule, TasksModule]
})
export class AppModule {}

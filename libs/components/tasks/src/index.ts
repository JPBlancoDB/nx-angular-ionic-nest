import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TasksModule } from './lib/tasks.module';

platformBrowserDynamic()
  .bootstrapModule(TasksModule)
  .catch(err => console.error(err));

import { Sequelize } from 'sequelize-typescript';
import { environment } from '../environments/environment';
import { TaskEntity } from './entities/task.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: environment.databaseConnection.engine,
        host: environment.databaseConnection.host,
        port: environment.databaseConnection.port,
        username: environment.databaseConnection.username,
        password: environment.databaseConnection.password,
        database: environment.databaseConnection.database
      });
      sequelize.addModels([TaskEntity]);
      await sequelize.sync();
      return sequelize;
    }
  }
];

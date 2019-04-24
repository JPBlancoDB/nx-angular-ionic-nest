import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'tasks' })
export class TaskEntity extends Model<TaskEntity> {
  @Column
  description: string;

  @Column({ defaultValue: 0 })
  status: number;
}

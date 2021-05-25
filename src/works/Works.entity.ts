import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class Works extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'author_stu_id' })
  stuId: string;

  @Column({ type: 'text', name: 'content' })
  content: string;
  @Column({ type: 'bit', name: 'enable' })
  enable: boolean;
  @Column({ type: 'varchar', name: 'style' })
  style: string;
  @Column({ type: 'varchar', name: 'title' })
  title: string;
  @Column({ type: 'varchar', name: 'up_time' })
  upTime: Date;
  @Column({ type: 'int', name: 'activity_id', nullable: true })
  activityId: string;
  @Column({ type: 'int', name: 'author_id' })
  authorId: string;
}

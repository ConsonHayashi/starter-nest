import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class UserMeta {
  @PrimaryGeneratedColumn()
  id: number;
}

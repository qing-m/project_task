import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string; // 角色：user/admin
}

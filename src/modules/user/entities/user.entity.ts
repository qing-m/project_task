import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ select: false }) // 默认不返回密码
  password: string;

  @Column({ default: 'user' })
  role: string; // 角色：user/admin
}

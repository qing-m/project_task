import * as bcrypt from 'bcrypt';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { RegisterDto } from '../auth/dto/register-auth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async register(registerDto: RegisterDto): Promise<UserEntity> {
    const existingUser = await this.userRepository.findOne({
      where: { username: registerDto.username },
    });
    if (existingUser) {
      throw new ConflictException('用户名已存在');
    }
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const user = this.userRepository.create({
      username: registerDto.username,
      password: hashedPassword,
    });
    return await this.userRepository.save(user);
  }
}

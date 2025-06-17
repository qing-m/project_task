import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login-auth.dto';
import { RegisterDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto): Promise<string> {
    return '登录成';
  }
}

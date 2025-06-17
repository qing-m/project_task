import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login-auth.dto';
@Injectable()
export class AuthService {
  async validateUser(username: string, password: string) {
    
  }

  async login(loginDto: LoginDto): Promise<string> {
    return '登录成';

  }
}

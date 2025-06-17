import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';

import { SanitizeInterceptor } from 'src/interceptors/sanitize.interceptor';

import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

import { LoginDto } from './dto/login-auth.dto';
import { RegisterDto } from './dto/register-auth.dto';

// 拦截返回的password
@UseInterceptors(SanitizeInterceptor)
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.userService.register(registerDto);
  }
}

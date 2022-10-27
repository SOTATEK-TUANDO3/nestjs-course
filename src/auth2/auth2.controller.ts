import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiQuery } from '@nestjs/swagger';
import { Auth2Service } from './auth2.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth2')
export class Auth2Controller {
  constructor(private auth2Service: Auth2Service) {}

  @Post('/signin')
  @UseGuards(AuthGuard('local'))
  signIn(@Request() req) {
    return this.auth2Service.login(req.user);
  }

  @Post('/signin1')
  @ApiQuery({ name: 'username', type: String })
  @ApiQuery({ name: 'password', type: String })
  login(@Body() signInDto: AuthCredentialsDto) {
    return this.auth2Service.login(signInDto);
  }

  @Post('/signup')
  signUp(@Body() createUserDto: CreateUserDto) {
    this.auth2Service.signUp(createUserDto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}

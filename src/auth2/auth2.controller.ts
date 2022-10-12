import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Auth2Service } from './auth2.service';
import { CreateUserDto } from './dto/createUser.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth2')
export class Auth2Controller {
  constructor(private auth2Service: Auth2Service) {}

  @Post('/signin')
  signIn(@Body() signInDto: any) {
    this.auth2Service.signIn(signInDto);
  }

  @Post('/signin1')
  @UseGuards(AuthGuard('local'))
  login(@Request() req) {
    return this.auth2Service.login(req.user);
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

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class Auth2Service {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: AuthCredentialsDto) {
    const { username, password } = signInDto;
    const payload = this.validateUser(username, password);
    if (payload) {
      return {
        access_token: this.jwtService.sign(payload),
      }
    }
    throw new UnauthorizedException();
  }

  async signUp(createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneUser(username);
    console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { username } = user;
      return {
        username,
      };
    }

    return null;
  }

  async login(user: { username: string }) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

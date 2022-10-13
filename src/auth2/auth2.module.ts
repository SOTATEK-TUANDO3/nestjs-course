import { Module } from '@nestjs/common';
import { Auth2Service } from './auth2.service';
import { Auth2Controller } from './auth2.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstanst } from './contstants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstanst.secret,
      signOptions: { expiresIn: '6000s' },
    }),
  ],
  providers: [Auth2Service, LocalStrategy, JwtStrategy],
  controllers: [Auth2Controller],
})
export class Auth2Module {}

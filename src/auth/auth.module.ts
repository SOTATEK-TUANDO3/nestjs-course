import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRespository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRespository])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
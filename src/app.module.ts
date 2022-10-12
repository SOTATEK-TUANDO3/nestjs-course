import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ScheduleModule } from '@nestjs/schedule';
import { Auth2Module } from './auth2/auth2.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // TasksModule,
    MongooseModule.forRoot('mongodb://localhost:27017/bookstore'),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'task-management',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    // AuthModule,
    ProductsModule,
    ScheduleModule.forRoot(),
    Auth2Module,
    UsersModule
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ScheduleModule } from '@nestjs/schedule';

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
    ScheduleModule.forRoot()
  ],
})
export class AppModule {}

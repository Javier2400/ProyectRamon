import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    CategoriesModule.forRoot({
      isGlobal: true,
    }), // Importing CategoriesModule with forRoot method
    TypeOrmModule.forRootAsync({
      useFactory: TypeOrmConfig
    }),
    CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

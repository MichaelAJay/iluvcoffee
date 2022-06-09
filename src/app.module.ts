import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module'; /** Note:  DatabaseModule may have auto-added to the App Module, but I'm not sure we need it there */

@Module({
  imports: [
    ConfigModule.forRoot(),
    CoffeesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true
}), CoffeeRatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OpenaiApiModule } from './openai-api/openai-api.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { City } from './city/city.entity';
import { PlanModule } from './plan/plan.module';
import { Plan } from './plan/plan.entity';

@Module({
  imports: [
    OpenaiApiModule,
    CityModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [City, Plan],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PlanModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
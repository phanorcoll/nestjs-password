import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://root:toor@0.0.0.0:27017', {
      dbName: 'nestjs',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

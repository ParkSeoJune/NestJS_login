import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from 'src/login_/entities/login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  controllers: [],
  providers: [],
})
export class LoginModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

//INFO:
// - add exports array so that services are available outside of this module.
@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

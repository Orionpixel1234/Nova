import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PostgresDbService } from 'src/postgres-db/postgres-db.service';
import { PostgresDbModule } from 'src/postgres-db/postgres-db.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PostgresDbModule, ConfigModule],
  controllers: [UserController],
  providers: [UserService, PostgresDbService],
})
export class UserModule {}

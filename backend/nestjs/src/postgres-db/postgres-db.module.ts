import { Module } from '@nestjs/common';
import { PostgresDbService } from './postgres-db.service';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [PostgresDbService],
  exports: [PostgresDbService]
})
export class PostgresDbModule {}

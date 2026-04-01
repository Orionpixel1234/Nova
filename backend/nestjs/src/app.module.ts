import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { PostgresDbModule } from './postgres-db/postgres-db.module';
import { UserModule } from './user/user.module';
import { PostgresDbService } from './postgres-db/postgres-db.service';

@Module({
  imports: [HomeModule, PostgresDbModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private test: PostgresDbService) {}
  onModuleInit() {
    console.log(Object.keys(this.test));
  }
}

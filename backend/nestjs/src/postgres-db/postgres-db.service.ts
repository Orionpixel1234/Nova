import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { ConfigService } from 'src/config/config.service';

@Injectable({})
export class PostgresDbService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor(configService: ConfigService) {
        const pool = new Pool({
            connectionString: configService.getPostgresConnectionURL()
        });

        const pgAdapter = new PrismaPg(pool);
        console.log(Object.keys(PostgresDbService));
        super({ adapter: pgAdapter });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}

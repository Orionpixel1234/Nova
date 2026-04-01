import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
    constructor(private configService: NestConfigService) {}
    getPostgresConnectionURL() {
        return this.configService.get<string>('POSTGRES_CONNECTION_STRING', '');
    }
}

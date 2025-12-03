import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig = (): TypeOrmModuleOptions => ({
    type: 'postgres',
});
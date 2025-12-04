import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',

  url: process.env.DATABASE_URL,

  autoLoadEntities: true,

  ssl: {
    rejectUnauthorized: false,
  },

  synchronize: true, 
});

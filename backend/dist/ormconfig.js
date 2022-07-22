"use strict";
const config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'task_managment',
    entities: [__dirname + '/**/*entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    logging: true,
    logger: 'file',
    migrations: [__dirname + '/**/*migrations{.ts,.js}'],
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map
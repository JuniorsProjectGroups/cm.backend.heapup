import { User } from "@/modules/user/user.entity";
import { Sequelize } from "sequelize-typescript";
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from "../constants";
import { databaseConfig } from "./database.config";
import { Dialect } from "./interfaces/dbConfig.interface";

export const DatabaseProviders = [
  {
    provide: SEQUELIZE,
    // eslint-disable-next-line max-lines-per-function
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.DEVELOPMENT;
          break;
        case TEST:
          config = databaseConfig.TEST;
          break;
        case PRODUCTION:
          config = databaseConfig.PRODUCTION;
          break;
        default:
          config = databaseConfig.DEVELOPMENT;
      }
      console.log(config);

      const sequelize = new Sequelize(
        config.database ? config.database : "",
        config.username ? config.username : "",
        config.password || "",
        {
          host: config.host,
          dialect: config.dialect as Dialect,
          port: config.port as number,
        },
      );
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

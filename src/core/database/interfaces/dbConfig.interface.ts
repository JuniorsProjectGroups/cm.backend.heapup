export interface IDatabaseConfigAttributes {
  database?: string;
  username?: string;
  password?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
}

export interface IDatabaseConfig {
  DEVELOPMENT: IDatabaseConfigAttributes;
  TEST: IDatabaseConfigAttributes;
  PRODUCTION: IDatabaseConfigAttributes;
}
export type Dialect = "mysql" | "postgres" | "sqlite" | "db2" | "mariadb" | "mssql";

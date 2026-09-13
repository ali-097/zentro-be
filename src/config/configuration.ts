export interface AppConfig {
  app: {
    port: number;
  };
  database: {
    host: string;
    port: number;
    user: string;
    password: string;
    name: string;
  };
}

export default (): AppConfig => ({
  app: {
    port: parseInt(process.env.PORT as string, 10) || 3000,
  },
  database: {
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string, 10),
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    name: process.env.DB_NAME as string,
  },
});
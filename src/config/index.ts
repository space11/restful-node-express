export interface IApplicationConfig {
  port: number | string;
  env: string;
}

export const config: IApplicationConfig = {
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV || "development"
};


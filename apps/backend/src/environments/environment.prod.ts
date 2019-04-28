export const environment = {
  production: true,
  port: 5000,
  globalPrefix: 'api',
  url: 'http://localhost:5000/api',
  databaseConnection: {
    engine: 'mysql',
    username: 'root',
    password: '',
    database: 'nest',
    host: 'localhost',
    port: 3306
  },
  corsWhitelistUrls: ['http://localhost:4200']
};

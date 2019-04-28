import { NestFactory } from '@nestjs/core';
import cors from 'cors';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(environment.globalPrefix);
  const port = environment.port || 3333;

  const corsOptions = {
    origin: (origin, callback) => {
      const isWhitelisted =
        environment.corsWhitelistUrls.indexOf(origin) !== -1;
      callback(null, isWhitelisted);
    }
  };

  app.use(cors(corsOptions));

  await app.listen(port, () => {
    console.log(
      `Listening at http://localhost:${port}/${environment.globalPrefix}`
    );
  });
}

bootstrap();

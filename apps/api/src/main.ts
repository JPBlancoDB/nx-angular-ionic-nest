import { NestFactory } from '@nestjs/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(environment.globalPrefix);
  const port = environment.port || 3333;
  await app.listen(port, () => {
    console.log(
      `Listening at http://localhost:${port}/${environment.globalPrefix}`
    );
  });
}

bootstrap();

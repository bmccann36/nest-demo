import { NestFactory } from '@nestjs/core';
import { CatsService } from './cats/cats.service';
import { AppModule } from './app.module';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
  const catsService = app.get(CatsService);
  catsService.create({ name: 'ooga', age: 2, breed: 'nunkonw' });
}

bootstrap();

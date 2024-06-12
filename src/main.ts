import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true, // Ativa a transformação automática de tipos
      //ou seja está liberando que o class-transformer transforme os dados de entrada para
      //os que estão especificados nos dts
    })
  )
  await app.listen(3000);
}
bootstrap();

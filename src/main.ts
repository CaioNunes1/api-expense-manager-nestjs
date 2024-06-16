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
      whitelist:true,
      //permite que apenas as propiedades dos dtos sejam requisitadas
    //ou seja remove as propiedades não esperadas no objeto de entrada.
    })
  )

  app.enableCors({//o cors é um mecanismo que libera a que os recursos da api sejam solicitados por outros domínios
    //por exemplo um front-end
    origin:'http://localhost:3000',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials:true,
  })

  await app.listen(3000);
}
bootstrap();

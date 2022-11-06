import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import {PORT} from "./shared/constants/application";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000 },
  });
  await app.startAllMicroservices();
  await app.listen(PORT);
}
bootstrap().then(()=>{
  process.stdout.write(`Application is running on: http://localhost:${PORT}`);
}).catch(err=>{
  console.error(err);
  process.exit(1);
});

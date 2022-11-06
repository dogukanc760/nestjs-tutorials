import {CacheModule, Module} from '@nestjs/common';
import { UserModule } from './resource/user/user.module';
import {REDIS_CACHE_OPTIONS} from "./infra/redis/redis.config";

@Module({
  imports: [
    CacheModule.register({
      ...REDIS_CACHE_OPTIONS
    }),
    UserModule,
  ],
})
export class AppModule {}

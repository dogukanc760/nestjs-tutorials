import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Cache } from "cache-manager";

@Injectable()
export class UserService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}
  public async create(id: number): Promise<string> {
    return this.cache.set(`user.${id}`, JSON.stringify(id + " user bilgisi"));
  }

  public async findAll(): Promise<unknown> {
    return this.cache.get("user");
  }

  public async getByKey(id: number): Promise<CreateUserDto> {
    const user = (await this.cache.get(`user.${id}`)) as string;
    console.log(user)
    return JSON.parse(user);
  }



  public async remove(id: number): Promise<void> {
    return this.cache.del(`user.${id}`);
  }
}

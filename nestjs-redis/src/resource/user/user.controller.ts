/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { randomInt } from "crypto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findLatest() {
    const result = await this.userService.create(randomInt(1001));
    return result;
  }

  @Get("/find/:id")
  async getByKey(@Param("id") id: number) {
    return this.userService.getByKey(id);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.userService.remove(id);
  }
}

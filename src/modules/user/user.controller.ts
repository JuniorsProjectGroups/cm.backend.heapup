import { Controller, Get } from "@nestjs/common";
import { UsersService } from "@/modules/user/user.service";
import { User } from "./user.entity";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}

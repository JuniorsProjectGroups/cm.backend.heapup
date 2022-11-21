import { UserDto } from "@/dtoTypes/user.dto";
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(@Body() user: UserDto) {
    return await this.authService.login(user);
  }

  @Post("signup")
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }
}

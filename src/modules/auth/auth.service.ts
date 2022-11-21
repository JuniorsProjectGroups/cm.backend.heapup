import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UsersService } from "@/modules/user/user.service";
import { JwtService } from "@nestjs/jwt";
import { UserDto } from "@/dtoTypes/user.dto";
import { User } from "../user/user.entity";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, pass: string) {
    // find if user exist with this email
    const user = await this.userService.findOneByEmail(username);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = user["dataValues"];
    return result;
  }

  public async login(user: UserDto) {
    const token = await this.generateToken(user);
    return {
      user,
      token,
    };
  }

  public async create(user: UserDto) {
    // hash the password
    const pass = await this.hashPassword(user.password);

    // create the user
    const newUser = await this.userService.create({
      ...user,
      password: pass,
    });

    const { password, ...result } = newUser["dataValues"];

    // generate token
    const token = await this.generateToken(result as User);

    // return the user and the token
    return {
      user: result,
      token,
    };
  }

  private async generateToken(user: User | UserDto) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password: string) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword: string, dbPassword: string) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}

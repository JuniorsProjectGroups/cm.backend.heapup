import { Module } from "@nestjs/common";
import { UsersService } from "@/modules/user/user.service";
import { UserController } from "@/modules/user/user.controller";
import { usersProviders } from "@/dtoTypes/users.providers";
import { DatabaseModule } from "@/core/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}

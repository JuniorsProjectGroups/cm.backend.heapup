import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "@/app.service";
import { UsersModule } from "@/modules/user/user.module";
import { DatabaseModule } from "@/core/database/database.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [UsersModule, DatabaseModule, ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

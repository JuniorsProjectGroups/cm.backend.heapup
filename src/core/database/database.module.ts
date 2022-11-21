import { Module } from "@nestjs/common";
import { DatabaseProviders } from "@/core/database/database.providers";

@Module({
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders],
})
export class DatabaseModule {}

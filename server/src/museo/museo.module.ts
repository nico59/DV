import { Module } from "@nestjs/common";
import { MuseoModuleBase } from "./base/museo.module.base";
import { MuseoService } from "./museo.service";
import { MuseoController } from "./museo.controller";
import { MuseoResolver } from "./museo.resolver";

@Module({
  imports: [MuseoModuleBase],
  controllers: [MuseoController],
  providers: [MuseoService, MuseoResolver],
  exports: [MuseoService],
})
export class MuseoModule {}

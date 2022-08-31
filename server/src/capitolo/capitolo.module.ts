import { Module } from "@nestjs/common";
import { CapitoloModuleBase } from "./base/capitolo.module.base";
import { CapitoloService } from "./capitolo.service";
import { CapitoloController } from "./capitolo.controller";
import { CapitoloResolver } from "./capitolo.resolver";

@Module({
  imports: [CapitoloModuleBase],
  controllers: [CapitoloController],
  providers: [CapitoloService, CapitoloResolver],
  exports: [CapitoloService],
})
export class CapitoloModule {}

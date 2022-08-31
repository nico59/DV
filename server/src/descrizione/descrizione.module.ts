import { Module } from "@nestjs/common";
import { DescrizioneModuleBase } from "./base/descrizione.module.base";
import { DescrizioneService } from "./descrizione.service";
import { DescrizioneController } from "./descrizione.controller";
import { DescrizioneResolver } from "./descrizione.resolver";

@Module({
  imports: [DescrizioneModuleBase],
  controllers: [DescrizioneController],
  providers: [DescrizioneService, DescrizioneResolver],
  exports: [DescrizioneService],
})
export class DescrizioneModule {}

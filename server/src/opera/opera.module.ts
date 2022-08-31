import { Module } from "@nestjs/common";
import { OperaModuleBase } from "./base/opera.module.base";
import { OperaService } from "./opera.service";
import { OperaController } from "./opera.controller";
import { OperaResolver } from "./opera.resolver";

@Module({
  imports: [OperaModuleBase],
  controllers: [OperaController],
  providers: [OperaService, OperaResolver],
  exports: [OperaService],
})
export class OperaModule {}

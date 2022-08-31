import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DescrizioneServiceBase } from "./base/descrizione.service.base";

@Injectable()
export class DescrizioneService extends DescrizioneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

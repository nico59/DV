import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CapitoloServiceBase } from "./base/capitolo.service.base";

@Injectable()
export class CapitoloService extends CapitoloServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

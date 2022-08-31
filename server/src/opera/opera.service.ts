import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OperaServiceBase } from "./base/opera.service.base";

@Injectable()
export class OperaService extends OperaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

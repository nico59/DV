import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MuseoServiceBase } from "./base/museo.service.base";

@Injectable()
export class MuseoService extends MuseoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

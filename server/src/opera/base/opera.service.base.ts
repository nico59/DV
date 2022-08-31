/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Opera, Descrizione, Museo } from "@prisma/client";

export class OperaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OperaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperaFindManyArgs>
  ): Promise<number> {
    return this.prisma.opera.count(args);
  }

  async findMany<T extends Prisma.OperaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperaFindManyArgs>
  ): Promise<Opera[]> {
    return this.prisma.opera.findMany(args);
  }
  async findOne<T extends Prisma.OperaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperaFindUniqueArgs>
  ): Promise<Opera | null> {
    return this.prisma.opera.findUnique(args);
  }
  async create<T extends Prisma.OperaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperaCreateArgs>
  ): Promise<Opera> {
    return this.prisma.opera.create<T>(args);
  }
  async update<T extends Prisma.OperaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperaUpdateArgs>
  ): Promise<Opera> {
    return this.prisma.opera.update<T>(args);
  }
  async delete<T extends Prisma.OperaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OperaDeleteArgs>
  ): Promise<Opera> {
    return this.prisma.opera.delete(args);
  }

  async getDescrizione(parentId: string): Promise<Descrizione | null> {
    return this.prisma.opera
      .findUnique({
        where: { id: parentId },
      })
      .descrizione();
  }

  async getMuseo(parentId: string): Promise<Museo | null> {
    return this.prisma.opera
      .findUnique({
        where: { id: parentId },
      })
      .museo();
  }
}

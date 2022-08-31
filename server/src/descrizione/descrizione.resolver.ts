import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DescrizioneResolverBase } from "./base/descrizione.resolver.base";
import { Descrizione } from "./base/Descrizione";
import { DescrizioneService } from "./descrizione.service";

@graphql.Resolver(() => Descrizione)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DescrizioneResolver extends DescrizioneResolverBase {
  constructor(
    protected readonly service: DescrizioneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

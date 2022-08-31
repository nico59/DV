import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CapitoloResolverBase } from "./base/capitolo.resolver.base";
import { Capitolo } from "./base/Capitolo";
import { CapitoloService } from "./capitolo.service";

@graphql.Resolver(() => Capitolo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CapitoloResolver extends CapitoloResolverBase {
  constructor(
    protected readonly service: CapitoloService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

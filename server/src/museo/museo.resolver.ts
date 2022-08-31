import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MuseoResolverBase } from "./base/museo.resolver.base";
import { Museo } from "./base/Museo";
import { MuseoService } from "./museo.service";

@graphql.Resolver(() => Museo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MuseoResolver extends MuseoResolverBase {
  constructor(
    protected readonly service: MuseoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MuseoService } from "./museo.service";
import { MuseoControllerBase } from "./base/museo.controller.base";

@swagger.ApiTags("museos")
@common.Controller("museos")
export class MuseoController extends MuseoControllerBase {
  constructor(
    protected readonly service: MuseoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

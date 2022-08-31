import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CapitoloService } from "./capitolo.service";
import { CapitoloControllerBase } from "./base/capitolo.controller.base";

@swagger.ApiTags("capitolos")
@common.Controller("capitolos")
export class CapitoloController extends CapitoloControllerBase {
  constructor(
    protected readonly service: CapitoloService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

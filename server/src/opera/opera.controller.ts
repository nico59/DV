import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OperaService } from "./opera.service";
import { OperaControllerBase } from "./base/opera.controller.base";

@swagger.ApiTags("operas")
@common.Controller("operas")
export class OperaController extends OperaControllerBase {
  constructor(
    protected readonly service: OperaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

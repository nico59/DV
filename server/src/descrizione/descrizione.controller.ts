import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DescrizioneService } from "./descrizione.service";
import { DescrizioneControllerBase } from "./base/descrizione.controller.base";

@swagger.ApiTags("descriziones")
@common.Controller("descriziones")
export class DescrizioneController extends DescrizioneControllerBase {
  constructor(
    protected readonly service: DescrizioneService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

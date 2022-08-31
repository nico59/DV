import { CapitoloListRelationFilter } from "../capitolo/CapitoloListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OperaWhereUniqueInput } from "../opera/OperaWhereUniqueInput";

export type DescrizioneWhereInput = {
  capitolo?: CapitoloListRelationFilter;
  id?: StringFilter;
  operas?: OperaWhereUniqueInput;
};

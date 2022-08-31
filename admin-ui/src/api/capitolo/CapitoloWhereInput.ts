import { DescrizioneListRelationFilter } from "../descrizione/DescrizioneListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CapitoloWhereInput = {
  descriziones?: DescrizioneListRelationFilter;
  id?: StringFilter;
  numero?: IntNullableFilter;
  testo?: StringNullableFilter;
  titolo?: StringNullableFilter;
};

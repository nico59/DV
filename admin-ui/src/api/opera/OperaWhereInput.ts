import { DescrizioneWhereUniqueInput } from "../descrizione/DescrizioneWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MuseoWhereUniqueInput } from "../museo/MuseoWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OperaWhereInput = {
  descrizione?: DescrizioneWhereUniqueInput;
  id?: StringFilter;
  immagineOpera?: JsonFilter;
  museo?: MuseoWhereUniqueInput;
  titoloOpera?: StringNullableFilter;
};

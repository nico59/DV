import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OperaListRelationFilter } from "../opera/OperaListRelationFilter";

export type MuseoWhereInput = {
  denominazione?: StringNullableFilter;
  id?: StringFilter;
  operas?: OperaListRelationFilter;
};

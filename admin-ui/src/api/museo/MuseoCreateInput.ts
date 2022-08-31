import { OperaCreateNestedManyWithoutMuseosInput } from "./OperaCreateNestedManyWithoutMuseosInput";

export type MuseoCreateInput = {
  denominazione?: string | null;
  operas?: OperaCreateNestedManyWithoutMuseosInput;
};

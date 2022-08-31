import { OperaUpdateManyWithoutMuseosInput } from "./OperaUpdateManyWithoutMuseosInput";

export type MuseoUpdateInput = {
  denominazione?: string | null;
  operas?: OperaUpdateManyWithoutMuseosInput;
};

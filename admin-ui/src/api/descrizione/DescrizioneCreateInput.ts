import { CapitoloCreateNestedManyWithoutDescrizionesInput } from "./CapitoloCreateNestedManyWithoutDescrizionesInput";
import { OperaWhereUniqueInput } from "../opera/OperaWhereUniqueInput";

export type DescrizioneCreateInput = {
  capitolo?: CapitoloCreateNestedManyWithoutDescrizionesInput;
  operas?: OperaWhereUniqueInput | null;
};

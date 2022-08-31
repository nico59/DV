import { CapitoloUpdateManyWithoutDescrizionesInput } from "./CapitoloUpdateManyWithoutDescrizionesInput";
import { OperaWhereUniqueInput } from "../opera/OperaWhereUniqueInput";

export type DescrizioneUpdateInput = {
  capitolo?: CapitoloUpdateManyWithoutDescrizionesInput;
  operas?: OperaWhereUniqueInput | null;
};

import { DescrizioneWhereUniqueInput } from "../descrizione/DescrizioneWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { MuseoWhereUniqueInput } from "../museo/MuseoWhereUniqueInput";

export type OperaCreateInput = {
  descrizione?: DescrizioneWhereUniqueInput | null;
  immagineOpera?: InputJsonValue;
  museo: MuseoWhereUniqueInput;
  titoloOpera?: string | null;
};

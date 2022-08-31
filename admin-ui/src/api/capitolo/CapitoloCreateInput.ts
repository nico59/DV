import { DescrizioneCreateNestedManyWithoutCapitolosInput } from "./DescrizioneCreateNestedManyWithoutCapitolosInput";

export type CapitoloCreateInput = {
  descriziones?: DescrizioneCreateNestedManyWithoutCapitolosInput;
  numero?: number | null;
  testo?: string | null;
  titolo?: string | null;
};

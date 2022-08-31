import { DescrizioneUpdateManyWithoutCapitolosInput } from "./DescrizioneUpdateManyWithoutCapitolosInput";

export type CapitoloUpdateInput = {
  descriziones?: DescrizioneUpdateManyWithoutCapitolosInput;
  numero?: number | null;
  testo?: string | null;
  titolo?: string | null;
};

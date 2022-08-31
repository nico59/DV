import { Descrizione as TDescrizione } from "../api/descrizione/Descrizione";

export const DESCRIZIONE_TITLE_FIELD = "id";

export const DescrizioneTitle = (record: TDescrizione): string => {
  return record.id || record.id;
};

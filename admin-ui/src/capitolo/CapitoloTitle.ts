import { Capitolo as TCapitolo } from "../api/capitolo/Capitolo";

export const CAPITOLO_TITLE_FIELD = "titolo";

export const CapitoloTitle = (record: TCapitolo): string => {
  return record.titolo || record.id;
};

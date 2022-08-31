import { Opera as TOpera } from "../api/opera/Opera";

export const OPERA_TITLE_FIELD = "titoloOpera";

export const OperaTitle = (record: TOpera): string => {
  return record.titoloOpera || record.id;
};

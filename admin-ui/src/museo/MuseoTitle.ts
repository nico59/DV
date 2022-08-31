import { Museo as TMuseo } from "../api/museo/Museo";

export const MUSEO_TITLE_FIELD = "denominazione";

export const MuseoTitle = (record: TMuseo): string => {
  return record.denominazione || record.id;
};

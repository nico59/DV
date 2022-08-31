import { Descrizione } from "../descrizione/Descrizione";
import { JsonValue } from "type-fest";
import { Museo } from "../museo/Museo";

export type Opera = {
  createdAt: Date;
  descrizione?: Descrizione | null;
  id: string;
  immagineOpera: JsonValue;
  museo?: Museo;
  titoloOpera: string | null;
  updatedAt: Date;
};

import { Descrizione } from "../descrizione/Descrizione";

export type Capitolo = {
  createdAt: Date;
  descriziones?: Array<Descrizione>;
  id: string;
  numero: number | null;
  testo: string | null;
  titolo: string | null;
  updatedAt: Date;
};

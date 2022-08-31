import { Capitolo } from "../capitolo/Capitolo";
import { Opera } from "../opera/Opera";

export type Descrizione = {
  capitolo?: Array<Capitolo>;
  createdAt: Date;
  id: string;
  operas?: Opera | null;
  updatedAt: Date;
};

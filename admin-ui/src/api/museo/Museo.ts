import { Opera } from "../opera/Opera";

export type Museo = {
  createdAt: Date;
  denominazione: string | null;
  id: string;
  operas?: Array<Opera>;
  updatedAt: Date;
};

import { CapitoloWhereInput } from "./CapitoloWhereInput";
import { CapitoloOrderByInput } from "./CapitoloOrderByInput";

export type CapitoloFindManyArgs = {
  where?: CapitoloWhereInput;
  orderBy?: Array<CapitoloOrderByInput>;
  skip?: number;
  take?: number;
};

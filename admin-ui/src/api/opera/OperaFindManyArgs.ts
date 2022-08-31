import { OperaWhereInput } from "./OperaWhereInput";
import { OperaOrderByInput } from "./OperaOrderByInput";

export type OperaFindManyArgs = {
  where?: OperaWhereInput;
  orderBy?: Array<OperaOrderByInput>;
  skip?: number;
  take?: number;
};

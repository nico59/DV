import { MuseoWhereInput } from "./MuseoWhereInput";
import { MuseoOrderByInput } from "./MuseoOrderByInput";

export type MuseoFindManyArgs = {
  where?: MuseoWhereInput;
  orderBy?: Array<MuseoOrderByInput>;
  skip?: number;
  take?: number;
};

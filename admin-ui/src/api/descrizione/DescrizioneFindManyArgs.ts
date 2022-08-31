import { DescrizioneWhereInput } from "./DescrizioneWhereInput";
import { DescrizioneOrderByInput } from "./DescrizioneOrderByInput";

export type DescrizioneFindManyArgs = {
  where?: DescrizioneWhereInput;
  orderBy?: Array<DescrizioneOrderByInput>;
  skip?: number;
  take?: number;
};

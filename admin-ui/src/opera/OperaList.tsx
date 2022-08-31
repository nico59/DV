import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DESCRIZIONE_TITLE_FIELD } from "../descrizione/DescrizioneTitle";
import { MUSEO_TITLE_FIELD } from "../museo/MuseoTitle";

export const OperaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Operas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Descrizione"
          source="descrizione.id"
          reference="Descrizione"
        >
          <TextField source={DESCRIZIONE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Immagine_opera" source="immagineOpera" />
        <ReferenceField label="Museo" source="museo.id" reference="Museo">
          <TextField source={MUSEO_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Titolo_opera" source="titoloOpera" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

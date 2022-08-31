import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DESCRIZIONE_TITLE_FIELD } from "../descrizione/DescrizioneTitle";
import { MUSEO_TITLE_FIELD } from "./MuseoTitle";

export const MuseoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Denominazione" source="denominazione" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Opera" target="MuseoId" label="Operas">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

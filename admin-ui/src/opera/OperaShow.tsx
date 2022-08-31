import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DESCRIZIONE_TITLE_FIELD } from "../descrizione/DescrizioneTitle";
import { MUSEO_TITLE_FIELD } from "../museo/MuseoTitle";

export const OperaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

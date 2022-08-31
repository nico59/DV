import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DescrizioneTitle } from "../descrizione/DescrizioneTitle";
import { MuseoTitle } from "../museo/MuseoTitle";

export const OperaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="descrizione.id"
          reference="Descrizione"
          label="Descrizione"
        >
          <SelectInput optionText={DescrizioneTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput source="museo.id" reference="Museo" label="Museo">
          <SelectInput optionText={MuseoTitle} />
        </ReferenceInput>
        <TextInput label="Titolo_opera" source="titoloOpera" />
      </SimpleForm>
    </Create>
  );
};

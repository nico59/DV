import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DescrizioneTitle } from "../descrizione/DescrizioneTitle";
import { MuseoTitle } from "../museo/MuseoTitle";

export const OperaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

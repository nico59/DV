import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { DescrizioneTitle } from "../descrizione/DescrizioneTitle";

export const CapitoloCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="descriziones"
          reference="Descrizione"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DescrizioneTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="numero" source="numero" />
        <TextInput label="Testo" multiline source="testo" />
        <TextInput label="Titolo" source="titolo" />
      </SimpleForm>
    </Create>
  );
};

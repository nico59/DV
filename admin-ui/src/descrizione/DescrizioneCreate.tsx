import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CapitoloTitle } from "../capitolo/CapitoloTitle";
import { OperaTitle } from "../opera/OperaTitle";

export const DescrizioneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="capitolo"
          reference="Capitolo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CapitoloTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="opera.id" reference="Opera" label="Operas">
          <SelectInput optionText={OperaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OperaTitle } from "../opera/OperaTitle";

export const MuseoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Denominazione" source="denominazione" />
        <ReferenceArrayInput
          source="operas"
          reference="Opera"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OperaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

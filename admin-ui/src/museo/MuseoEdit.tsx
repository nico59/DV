import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OperaTitle } from "../opera/OperaTitle";

export const MuseoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

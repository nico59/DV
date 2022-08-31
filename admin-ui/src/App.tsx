import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OperaList } from "./opera/OperaList";
import { OperaCreate } from "./opera/OperaCreate";
import { OperaEdit } from "./opera/OperaEdit";
import { OperaShow } from "./opera/OperaShow";
import { MuseoList } from "./museo/MuseoList";
import { MuseoCreate } from "./museo/MuseoCreate";
import { MuseoEdit } from "./museo/MuseoEdit";
import { MuseoShow } from "./museo/MuseoShow";
import { DescrizioneList } from "./descrizione/DescrizioneList";
import { DescrizioneCreate } from "./descrizione/DescrizioneCreate";
import { DescrizioneEdit } from "./descrizione/DescrizioneEdit";
import { DescrizioneShow } from "./descrizione/DescrizioneShow";
import { CapitoloList } from "./capitolo/CapitoloList";
import { CapitoloCreate } from "./capitolo/CapitoloCreate";
import { CapitoloEdit } from "./capitolo/CapitoloEdit";
import { CapitoloShow } from "./capitolo/CapitoloShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Opera"
          list={OperaList}
          edit={OperaEdit}
          create={OperaCreate}
          show={OperaShow}
        />
        <Resource
          name="Museo"
          list={MuseoList}
          edit={MuseoEdit}
          create={MuseoCreate}
          show={MuseoShow}
        />
        <Resource
          name="Descrizione"
          list={DescrizioneList}
          edit={DescrizioneEdit}
          create={DescrizioneCreate}
          show={DescrizioneShow}
        />
        <Resource
          name="Capitolo"
          list={CapitoloList}
          edit={CapitoloEdit}
          create={CapitoloCreate}
          show={CapitoloShow}
        />
      </Admin>
    </div>
  );
};

export default App;

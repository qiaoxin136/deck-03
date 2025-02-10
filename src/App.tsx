//import { useEffect, useState } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";
//import { AmplifyMapLibreRequest } from 'maplibre-gl-js-amplify';

import { MapView } from '@aws-amplify/ui-react-geo';
import 'maplibre-gl/dist/maplibre-gl.css';

const INITIAL_VIEW_STATE = {
  longitude: 139.7674681227469,
  latitude: 35.68111419325676,
  zoom: 11,
  bearing: 0,
  pitch: 0,
};
//const client = generateClient<Schema>();

function App() {
  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const { signOut } = useAuthenticator();

  
  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  // function deleteTodo(id: string) {
  //   client.models.Todo.delete({ id });
  // }

  return (
    <main>
      return <MapView initialViewState={INITIAL_VIEW_STATE} />;
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;

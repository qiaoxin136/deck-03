//import { useEffect, useState } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from "@aws-amplify/ui-react";
//import { AmplifyMapLibreRequest } from 'maplibre-gl-js-amplify';

import "maplibre-gl/dist/maplibre-gl.css";

import { useEffect } from "react";
import { createMap } from "maplibre-gl-js-amplify";
// 以下だけ変える必要がある。Amplify -> {Amplify}

import "maplibre-gl/dist/maplibre-gl.css";

//const client = generateClient<Schema>();

function App() {
  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const { signOut } = useAuthenticator();

  async function initializeMap() {
    await createMap({
      container: 'map', // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/
      style: 'AmplifyMapLibreRequest',
      center: [-123.1187, 49.2819], // [Longitude, Latitude]
      zoom: 11
    });
  }


  useEffect(() => {
    initializeMap();
  }, []);

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
      <div id="map" style={{ height: "100vh" }} />
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;

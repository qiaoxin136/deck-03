import { useState } from "react";
import { DeckGL } from 'deck.gl';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { MapView } from "@aws-amplify/ui-react-geo";
import { MapViewState } from 'deck.gl';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import "maplibre-gl/dist/maplibre-gl.css";


const INITIAL_VIEW_STATE: MapViewState = {
  //longitude: 139.7674681227469,
  longitude: -80.20321,
  //latitude: 35.68111419325676,
  latitude: 26.00068,
  zoom: 17,
  bearing: 0,
  pitch: 0,
};

function App() {
  const { signOut } = useAuthenticator();
  const [viewport, setViewport] = useState<MapViewState>(INITIAL_VIEW_STATE);
  const layers:any = [];

  return (
    <main>
      <>
      
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller
          layers={layers}
          onViewStateChange={({ viewState }: { viewState: MapViewState }) =>
            setViewport(viewState)
          }
        >
          <Button onClick={signOut}>Sign out</Button>
          <MapView
            {...viewport}
            initialViewState={INITIAL_VIEW_STATE}
            style={{
              position: "absolute",
              zIndex: -1,
            }}
          />
          
        </DeckGL>
        
      </>
    </main>
  );
}

export default App;

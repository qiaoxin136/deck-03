import { useState } from "react";
import { DeckGL } from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';
import {GeoJsonLayer} from '@deck.gl/layers';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { MapView } from "@aws-amplify/ui-react-geo";
//import { MapViewState } from '@deck.gl/react';
import { Button } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import "maplibre-gl/dist/maplibre-gl.css";

import { Development } from "./components/development";


const INITIAL_VIEW_STATE: any = {
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
  const [viewport, setViewport] = useState(INITIAL_VIEW_STATE);
  const layers:any = [
    new ScatterplotLayer({
      id: 'scatterplot-layer',
      data: [
        { position: [-80.20321, 26.00068], color: [255, 0, 0], radius: 100 },
      ],
      getPosition: (d) => d.position,
      getRadius: (d) => d.radius,
      getFillColor: (d) => d.color,
    }),
  ];

  let layer21 = new GeoJsonLayer({
    id: "development",
    data: Development,
    extruded: true,
    filled: true,
    getElevation: 30,
    getFillColor: [63, 255, 0, 255],
    getLineColor: [0, 0, 0, 255],
    getLineWidth: 1,
    getPointRadius: 8,
    getText: (f:any) => f.properties.Id,
    getTextAlignmentBaseline: "center",
    getTextAnchor: "middle",
    lineWidthMinPixels: 1,
    lineWidthScale: 1,
    lineWidthUnits: "meters",
    pointRadiusMinPixels: 2,
    pointRadiusScale: 1,
    pointRadiusUnits: "pixels",
    pointType: "circle+text",
    stroked: true,
    autoHighlight: true,
    pickable: true,
  });

  layers.push(layer21);

  return (
    <main>
      <>
      
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller
          layers={layers}
          onViewStateChange={({ viewState }) =>
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

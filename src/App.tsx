import { useState, useCallback } from "react";
import { DeckGL } from '@deck.gl/react';
import {PickingInfo} from "@deck.gl/core";
import {MVTLayer} from '@deck.gl/geo-layers';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { MapView } from "@aws-amplify/ui-react-geo";
//import { MapViewState } from '@deck.gl/react';
import { Button } from '@aws-amplify/ui-react';


import {
  Marker, 
  NavigationControl, 
  GeolocateControl,
  ScaleControl,
} from 'react-map-gl';

import '@aws-amplify/ui-react/styles.css';
import "maplibre-gl/dist/maplibre-gl.css";

//import { Development } from "./components/development";


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
 
  const onClick = useCallback((info: PickingInfo) => {
    console.log(info.coordinate);
  }, []);

  const layers:any = [];

  let layer82 = new MVTLayer({
    id: "lateral",
    data: `https://a.tiles.mapbox.com/v4/hazensawyer.0t8hy4di/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiaGF6ZW5zYXd5ZXIiLCJhIjoiY2xmNGQ3MDgyMTE3YjQzcnE1djRpOGVtNiJ9.U06GItbSVWFTsvfg9WwQWQ`,

    minZoom: 0,
    maxZoom: 23,
    getLineColor: [169, 169, 169,255], 
      
    getFillColor: [140, 170, 180],
    getLineWidth: 1,

    lineWidthMinPixels: 1,
    pickable: true,
  });

  layers.push(layer82);

  let layer71 = new MVTLayer({
    id: "gravity-public-pipe",
    data: `https://a.tiles.mapbox.com/v4/hazensawyer.04mlahe9/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiaGF6ZW5zYXd5ZXIiLCJhIjoiY2xmNGQ3MDgyMTE3YjQzcnE1djRpOGVtNiJ9.U06GItbSVWFTsvfg9WwQWQ`,

    minZoom: 0,
    maxZoom: 23,
    getLineColor: [0, 163, 108, 255],
    getFillColor: [140, 170, 180],
    getLineWidth: (f) =>
      f.properties.DIAMETER < 7
        ? 1
        : f.properties.DIAMETER < 11
        ? 3
        : f.properties.DIAMETER < 17
        ? 5
        : f.properties.DIAMETER < 25
        ? 7
        : f.properties.DIAMETER < 31
        ? 9
        : 11,

    lineWidthMinPixels: 1,
    pickable: true,
  });

  layers.push(layer71);

  let layer101 = new MVTLayer({
    id: "gravity-private-pipe",
    data: `https://a.tiles.mapbox.com/v4/hazensawyer.dhp8w8ur/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiaGF6ZW5zYXd5ZXIiLCJhIjoiY2xmNGQ3MDgyMTE3YjQzcnE1djRpOGVtNiJ9.U06GItbSVWFTsvfg9WwQWQ`,

    minZoom: 0,
    maxZoom: 23,
    getLineColor:  [0, 163, 108, 255],
    getFillColor: [140, 170, 180],
    getLineWidth: (f) =>
      f.properties.DIAMETER < 7
        ? 1
        : f.properties.DIAMETER < 11
        ? 3
        : f.properties.DIAMETER < 17
        ? 5
        : f.properties.DIAMETER < 25
        ? 7
        : f.properties.DIAMETER < 31
        ? 9
        : 11,

    lineWidthMinPixels: 1,
    pickable: true,

  });

  layers.push(layer101);

  let layer81 = new MVTLayer({
    id: "fmpipe",
    data: `https://a.tiles.mapbox.com/v4/hazensawyer.4hfx5po8/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiaGF6ZW5zYXd5ZXIiLCJhIjoiY2xmNGQ3MDgyMTE3YjQzcnE1djRpOGVtNiJ9.U06GItbSVWFTsvfg9WwQWQ`,

    minZoom: 0,
    maxZoom: 23,
    getLineColor: (f) =>
      f.properties.DIAMETER < 10
        ? [128, 0, 32, 255]
        : f.properties.DIAMETER < 20
        ? [233, 116, 81, 255]
        : [255, 195, 0, 255],
    getFillColor: [140, 170, 180],
    getLineWidth: (f) =>
      f.properties.DIAMETER < 7
        ? 1
        : f.properties.DIAMETER < 11
        ? 3
        : f.properties.DIAMETER < 17
        ? 4
        : f.properties.DIAMETER < 25
        ? 5
        : f.properties.DIAMETER < 31
        ? 6
        : 7,

    lineWidthMinPixels: 1,
    pickable: true,
  });

  layers.push(layer81);


  let layer75 = new MVTLayer({
    id: "mh",
    data: `https://a.tiles.mapbox.com/v4/hazensawyer.56zc2nx5/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1IjoiaGF6ZW5zYXd5ZXIiLCJhIjoiY2xmNGQ3MDgyMTE3YjQzcnE1djRpOGVtNiJ9.U06GItbSVWFTsvfg9WwQWQ`,
    minZoom: 15,
    maxZoom: 23,
    filled: true,
    getIconAngle: 0,
    getIconColor: [0, 0, 0, 255],
    getIconPixelOffset: [-2, 2],
    getIconSize: 3,
    // getText: (f) => f.properties.FACILITYID,
    getPointRadius: 2,
    getTextAlignmentBaseline: "center",
    getTextAnchor: "middle",
    getTextAngle: 0,
    getTextBackgroundColor: [0, 0, 0, 255],
    getTextBorderColor: [0, 0, 0, 255],
    getTextBorderWidth: 0,
    getTextColor: [0, 0, 0, 255],
    getTextPixelOffset: [-12, -12],
    getTextSize: 20,
    pointRadiusMinPixels: 2,

    // getPointRadius: (f) => (f.properties.PRESSURE < 45 ? 6 : 3),
    getFillColor: [255, 195, 0, 255],
    // Interactive props
    pickable: true,
    autoHighlight: true,
    // ...choice,
    // pointRadiusUnits: "pixels",
    pointType: "circle+text",
  });

  layers.push(layer75);


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
          onClick={onClick}
          
        >
          <Button onClick={signOut}>Sign out</Button >
          <MapView
            {...viewport}
            initialViewState={INITIAL_VIEW_STATE}
            
            style={{
              position: "absolute",
              zIndex: -1,
            }}
            
          >
            
            <Marker latitude={26.10} longitude={-80.25} />
            <NavigationControl/>
            <GeolocateControl/>
            <ScaleControl />
            
          </MapView>
          
        </DeckGL>
        
      </>
    </main>
  );
}

export default App;

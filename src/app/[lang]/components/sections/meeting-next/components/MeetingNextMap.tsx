import * as React from 'react';
import Map, { Popup } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export const middleOfUSA = [-100, 40];

const MeetingNextMap = () => {
  return (
    <Map
      initialViewState={{
        longitude: 6.94537,
        latitude: 50.93329,
        zoom: 10,
      }}
      mapStyle="/styles/map-dark.json"
    >
      <Popup longitude={6.94537} latitude={50.93329}>
        <h3>Next meeting</h3>
      </Popup>
    </Map>
  );
};

export default MeetingNextMap;

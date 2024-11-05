import * as React from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import useStore from '@/store';

const MeetingNextMap = () => {
  const coordinates = useStore(
    state => state.nextMeeting?.address?.coordinates
  );
  return (
    <Map
      initialViewState={{
        longitude: 6.959974,
        latitude: 50.938361,
        zoom: 11,
      }}
      mapStyle="/styles/map-dark.json"
    >
      {coordinates?.lat && coordinates.lon && (
        <Marker longitude={coordinates?.lon} latitude={coordinates?.lat} />
      )}
    </Map>
  );
};

export default MeetingNextMap;

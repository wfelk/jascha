import * as React from 'react';
import Map, { Popup, Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import useStore from '@/store';

const MeetingNextMap = () => {
  const locationName = useStore(state => state.nextMeeting?.location?.name);
  return (
    <Map
      initialViewState={{
        longitude: 6.94537,
        latitude: 50.93329,
        zoom: 10,
      }}
      mapStyle="/styles/map-dark.json"
    >
      <Marker longitude={6.94537} latitude={50.93329} />
    </Map>
  );
};

export default MeetingNextMap;

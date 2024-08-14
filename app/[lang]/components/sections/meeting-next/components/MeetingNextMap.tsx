'use client';

import React, { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const defaultIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Props {
  coordinates: { lat: number; lon: number };
  venue: string;
}

const MeetingNextMap: FC<Props> = ({ coordinates, venue }) => {
  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lon]}
      zoom={13}
      style={{ height: '250px', width: '100%', borderRadius: '6px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[coordinates.lat, coordinates.lon]} icon={defaultIcon}>
        <Popup>{venue}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MeetingNextMap;

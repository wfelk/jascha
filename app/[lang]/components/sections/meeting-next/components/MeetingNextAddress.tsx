'use client';

import React, { FC } from 'react';
import type Lang from '@/types/lang';
import IconMapPin from '../../../icons/IconMapPin';
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
  lang: Lang;
  name: string;
  street: string;
  houseNumber: string;
  postCode: string;
  city: string;
  venue: string;
}

const Address: FC<Props> = ({
  coordinates,
  lang,
  name,
  street,
  houseNumber,
  postCode,
  city,
  venue,
}) => {
  return (
    <div className="border-2 p-4 rounded-lg border-teal-200/50 flex flex-col gap-4 min-w-[300px] max-w-[400px] md:min-w-full">
      <address className="flex not-italic items-center relative justify-between pl-7 pr-3">
        <IconMapPin className="w-14 h-14 fill-teal-200/20 absolute -left-1 -top-1" />
        <span
          className="text-sky-200/90 quotation-marks tracking-wider text-xl inline-block text-center"
          lang={lang}
        >
          {name}
        </span>
        <div>
          <div className="flex items-center gap-1 text-sky-300">
            <span>{street}</span>
            <span>{houseNumber}</span>
          </div>
          <div className="flex items-center gap-1 text-sky-400/75">
            <span>{postCode}</span>
            <span>{city}</span>
          </div>
        </div>
      </address>
      {coordinates && (
        <MapContainer
          center={[coordinates.lat, coordinates.lon]}
          zoom={13}
          style={{ height: '250px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[coordinates.lat, coordinates.lon]}
            icon={defaultIcon}
          >
            <Popup>{venue}</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Address;

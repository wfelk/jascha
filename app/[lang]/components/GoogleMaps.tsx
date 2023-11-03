/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { FC, useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

interface LatLng {
  lat: number;
  lng: number;
}

interface Props {
  coordinates: LatLng;
  className?: string;
}

const GoogleMaps: FC<Props> = ({ coordinates, className = "w-full h-96" }) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
    return null;
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const center = useMemo(() => {
    return coordinates ? coordinates : { lat: 50.941303, lng: 6.958138 };
  }, [coordinates]);

  return (
    <div>
      {!isLoaded ? (
        <p>…</p>
      ) : (
        <GoogleMap mapContainerClassName={className} center={center} zoom={15}>
          <MarkerF
            position={center}
            icon={"https://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMaps;

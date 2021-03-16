import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react-with-api";
import styled from "styled-components";
import { useState } from "react";

export const Map = () => {
  const [location, setLocation] = useState({
    lat: 41.642508328691854,
    lng: -91.53495755506006,
  });

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
      }}
      defaultCenter={location}
      defaultZoom={15}
    >
      <Pin lat={location.lat} lng={location.lng} text={""} />
    </GoogleMapReact>
  );
};

const Pin = styled(Icon).attrs((props) => ({
  icon: "mdi:map-marker",
}))`
  display: "inline-flex";
  text-align: "center";
  align-items: "center";
  justify-content: "center";
  font-size: 40px;
  transform: translate(-50%, -90%);
`;

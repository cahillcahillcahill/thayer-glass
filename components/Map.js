import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react-with-api";
import styled from "styled-components";
import { useState } from "react";

export const Map = () => {
  const [location, setLocation] = useState({
    lat: 41.656856,
    lng: -91.531675,
  });

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyDpQ480hNzrlSbFvvb-u2VYBQyiOP8w0VI",
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

import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { Container } from "react-bootstrap";
function MapRoutes({ zoom, center, routes, colorRoute, scrollWheel = true }) {
  return (
    <Container  style={{ height: "200px" }}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={scrollWheel}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {routes.map((route) => (
          
          <Polyline
            key={route.id}
            pathOptions={{ color:route.color }}
            positions={route.route}
          />
        ))}
      </MapContainer>
    </Container>
  );
}

export default MapRoutes;

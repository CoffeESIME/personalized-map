'use client';
import React from "react";
import { Row, Container } from "react-bootstrap";
import MapRoutes from "./map/mapComponent";
import { geoData } from "../../GEOJson/ZacamulpaMarqueza";
import { VentaValle } from "../../GEOJson/VentaValleMonja";
import { ventaMarquesa } from "../../GEOJson/VentaMarquesa";
function Main(props) {
  const center = [19.353536, -99.318017];
  const zoom = 13;
  const ZacMarRoute = geoData.features.map((p) => [
    p.geometry.coordinates[1],
    p.geometry.coordinates[0],
  ]);
  const VentaValleRoute = VentaValle.features.map((p) => [
    p.geometry.coordinates[1],
    p.geometry.coordinates[0],
  ]);
  const ventaMarquesaRoute = ventaMarquesa.features.map((p) => [
    p.geometry.coordinates[1],
    p.geometry.coordinates[0],
  ]);
  const routes = [
    { id: 1, route: ZacMarRoute },
    { id: 2, route: VentaValleRoute },
    { id: 3, route: ventaMarquesaRoute },
  ];
  return (
    <>
      <Container fluid>
      </Container>
      <MapRoutes center={center} zoom={zoom} routes={routes} />
    </>
  );
}

export default Main;

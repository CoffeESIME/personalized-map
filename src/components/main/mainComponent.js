'use client';
import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import MapRoutes from "./map/mapComponent";
import RouteSelector from "../RouteSelector/RouteSelector";
function Main(props) {
  const [geoJSONData, setGeoJSONData] = useState([]);
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  const handleRouteSelection = (routeId, color) => {
    const route = geoJSONData.find((r) => r.id === routeId);
    console.log('da color', selectedRoutes)
    if (color) {
      setSelectedRoutes((prevRoutes) => [
        ...prevRoutes.filter((r) => r.id !== routeId),
        { ...route, color },
      ]);
    } else {
      setSelectedRoutes((prevRoutes) => prevRoutes.filter((r) => r.id !== routeId));
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://${process.env.REACT_APP_API_BASE_URL}:3002/route`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data)
      let arrayRoutes = data.map((route) => {
        const processedCoordinates = route.geoJSON.features[0].geometry.coordinates.map((feature) => [
          feature[1],
          feature[0],
        ]);
        return {
          id: route._id, // Assuming you have an _id field in your route schema
          route: processedCoordinates,
          name: route.name
        };
      })

      setGeoJSONData(arrayRoutes);
    }
    const fetchGeoJSONData = async () => {

      try {

        fetchData();
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
      }
    };

    fetchGeoJSONData();
  }, []);

  const center = [19.353536, -99.318017];
  const zoom = 11;
  return (
    <Container fluid >
      <Row>
        <Col sm={8}>
          {geoJSONData != null && <MapRoutes center={center} zoom={zoom} routes={selectedRoutes} />}
        </Col>
        <Col sm={4}>
          <RouteSelector routes={geoJSONData} onRouteSelection={handleRouteSelection} />
        </Col>
      </Row>
    </Container>

  );
}

export default Main;

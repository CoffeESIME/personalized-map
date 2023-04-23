'use client';
import React, {useState, useEffect} from "react";
import { Row, Container } from "react-bootstrap";
import MapRoutes from "./map/mapComponent";
function Main(props) {
  // Add state to store the GeoJSON data
  const [geoJSONData, setGeoJSONData] = useState(null);

  // Fetch the GeoJSON data from your server when the component mounts
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3002/route', {
        method: 'GET',
      });
      const data = await response.json();
      let arrayRoutes = data.map((route) => {
        const processedCoordinates = route.geoJSON.features[0].geometry.coordinates.map((feature) => [
          feature[1],
          feature[0],
        ]);
        return {
          id: route._id, // Assuming you have an _id field in your route schema
          route: processedCoordinates,
        };
      })      
      console.log(arrayRoutes)

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
  const zoom = 13;
  return (
    <>
      <Container fluid>
      </Container>
      {geoJSONData!= null  &&<MapRoutes center={center} zoom={zoom} routes={geoJSONData} />
    }</>
  );
}

export default Main;

import React, { useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap'
const GPXUploader = ({ onGPXUpload }) => {
  const [gpxFile, setGPXFile] = useState(null);
  const handleFileUpload = (event) => {

    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      setGPXFile(file);

    }
  };

  const handleSubmit = async (event) => {
    try {
      const formData = new FormData();
      formData.append('file', gpxFile);
      const response = await fetch(`http://${process.env.REACT_APP_API_BASE_URL}:3002/route`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error('File upload failed:', response.statusText);
      }
    } catch (error) {
      console.error('File upload error:', error);
    }
  }

  return (
    <Form style={{ width: '400px' }} className='mx-auto'>
      <Row className="mb-3">

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Selecciona archivo .gpx</Form.Label>
          <Form.Control type="file" onChange={handleFileUpload} accept='.gpx' />
        </Form.Group>
        <Button onClick={handleSubmit}>Subir</Button>
      </Row>
    </Form>
  );
};

export default GPXUploader;

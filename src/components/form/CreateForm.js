import React from 'react';
import GPXUploader from './CreateRoute';

const CreateForm = () => {
  const handleGPXUpload = (gpxData) => {
    console.log('GPX data:', gpxData);
    // Process the GPX data as needed
  };

  return (
    <div>
      <h1>Upload a GPX File</h1>
      <GPXUploader onGPXUpload={handleGPXUpload} />
    </div>
  );
};

export default CreateForm;

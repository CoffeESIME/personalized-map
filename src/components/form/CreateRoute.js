import React, { useState } from 'react';

const GPXUploader = ({ onGPXUpload }) => {

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await fetch('http://localhost:3002/route', {
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
  };
  
  

  return (
    <div>
      <input
        type="file"
        accept=".gpx"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default GPXUploader;

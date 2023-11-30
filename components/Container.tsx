// container.tsx
"use client"


import React from 'react';

const Container: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    border: '1px solid #ccc', // Add border styling
    width: '100%', // Make it take the full width
    padding: '16px', // Add padding for better appearance
  };

  return (
    <div style={containerStyle}>
      <p>This is my database content.</p>
    </div>
  );
};

export default Container;


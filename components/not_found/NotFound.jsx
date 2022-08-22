import React from 'react';

const NotFound = ({ error }) => {
  return (
    <div className="flex items-center justify-center h-screen">{error}</div>
  );
};

export default NotFound;

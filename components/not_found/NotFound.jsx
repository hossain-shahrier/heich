import React from 'react';
import Layout from '../Layout';

const NotFound = ({ error }) => {
  return (
    <Layout
      title="Not Found"
      className="flex items-center justify-center h-screen"
    >
      {error}
    </Layout>
  );
};

export default NotFound;

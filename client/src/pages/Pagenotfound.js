import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

const Pagenotfound = () => {
  return (
    <Layout
      title="404 - Page Not Found"
      description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
      keywords="404, not found, error"
      author="Ecommerce Team"
    >
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Oops! Page Not Found</h2>
        <p className="notfound-description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="notfound-button">Go to Homepage</Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;

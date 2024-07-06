import React from 'react';
import Layout from '../components/layout/Layout';

const Policy = () => {
  return (
    <Layout
      title="Privacy Policy - Ecommerce App"
      description="Read our privacy policy to understand how we handle your data."
      keywords="privacy, policy, ecommerce"
      author="Ecommerce Team"
    >
      <div className="row contactus ">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

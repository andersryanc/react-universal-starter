import React from 'react';
import Helmet from 'react-helmet';
import { Header } from 'components';

export default function NotFound() {
  return (
    <div className="hero is-fullheight is-danger is-bold">
      <Helmet title="404"/>

      <div className="hero-header">
        <Header />
      </div>

      <div className="hero-content">
        <div className="container">
          <h1 className="title">Doh! 404!</h1>
          <h2 className="subtitle">These are <em>not</em> the droids you are looking for!</h2>
        </div>
      </div>
    </div>
  );
}

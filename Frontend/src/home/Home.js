import "./Home.css";

import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

/** Home: Renders home page
 *
 * Props: none
 * State: none
 *
 * App -> Home
 *
 * */
function Home() {
  return (
    <div className="Home">
      <Container className="text-center">
        <h1 className="mb-4 fw-bold">Pix.ly</h1>
        <p className="lead">Your friendly image host!</p>
        <p>
          <Link className="btn btn-primary fw-bold me-3" to="/photos/gallery">
            View Gallery
          </Link>
          <Link className="btn btn-primary fw-bold me-3" to="/photos/add">
            Add Photo
          </Link>
        </p>
      </Container>
    </div>
  );
}

export default Home;

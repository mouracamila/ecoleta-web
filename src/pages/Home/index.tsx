import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import "./styles.css";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
        <main>
          <h1>You marktplace of waste colletion</h1>
          <p>We help people find collection points efficiently.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Register a new collection point</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import { Map, TileLayer, Marker } from "react-leaflet";

import "./styles.css";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="" />
        <Link to="/">
          <FiArrowLeft />
          Go back
        </Link>
      </header>
      <form>
        <h1>
          Register <br />
          collection point
        </h1>
        <fieldset>
          <legend>
            <h2>Data</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Entity Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="name">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Address</h2>
            <span>Select the address in the map</span>
          </legend>

          <Map center={[49.1983902, 16.6089248]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[49.1983902, 16.6089248]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">State(UF)</label>
              <select name="uf" id="uf">
                <option value="0">Select a UF</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">City</label>
              <select name="city" id="city">
                <option value="0">Select a city</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Collection Itens</h2>
            <span>You can select one or more itens</span>
          </legend>
          <ul className="items-grid">
            <li>
              <img src="" alt="Test" />
              <span>Kitchen oil</span>
            </li>
            <li className="selected">
              <img src="" alt="Test" />
              <span>Kitchen oil</span>
            </li>
            <li>
              <img src="" alt="Test" />
              <span>Kitchen oil</span>
            </li>
            <li>
              <img src="" alt="Test" />
              <span>Kitchen oil</span>
            </li>
            <li>
              <img src="" alt="Test" />
              <span>Kitchen oil</span>
            </li>
            <li>
              <img src="" alt="Test" />
              <span>Kitchen oil</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CreatePoint;

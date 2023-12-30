import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [form, setForm] = useState({
    // location: '',
    land_area: '',
    road_access: '',
    built_year: '',
    floor: '',
    bedroom: '',
    bathroom: '',
    facing: '',
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call your backend service here. This is just a placeholder.
    const response = await fetch('/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <div className="App">
      <h1 className="title">House Price Prediction</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="land_area">Land Area</label>
          <input
            name="land_area"
            value={form.land_area}
            onChange={handleChange}
            placeholder="Land Area"
          />
          <span className="unit">aana</span>
        </div>
        {/* <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
        /> */}
        <div className="input-container">
          <label htmlFor="road_access">Road Access</label>
          <input
            name="road_access"
            value={form.road_access}
            onChange={handleChange}
            placeholder="Road Access"
          />
          <span className="unit">feet</span>
        </div>
        <div className="input-container">
          <label htmlFor="built_year">Built Year</label>
          <input
            name="built_year"
            value={form.built_year}
            onChange={handleChange}
            placeholder="Built Year"
          />
          <span className="unit">B.S.</span>
        </div>
        <div className="input-container">
          <label htmlFor="floor">Floor</label>
          <input
            name="floor"
            value={form.floor}
            onChange={handleChange}
            placeholder="Floor"
          />
        </div>
        <div className="input-container">
          <label htmlFor="bedroom">Number of Bedroom</label>
          <input
            name="bedroom"
            value={form.bedroom}
            onChange={handleChange}
            placeholder="Number of bedrooms"
          />
        </div>
        <div className="input-container">
          <label htmlFor="bathroom">Number of Bathroom</label>
          <input
            name="bathroom"
            value={form.bathroom}
            onChange={handleChange}
            placeholder="Number of bathrooms"
          />
        </div>
        <div className="input-container">
          <label htmlFor="facing">Facing</label>
          <select
            name="facing"
            value={form.facing}
            onChange={handleChange}
            placeholder="Facing"
          >
            <option value="">Select Facing</option>
            <option value="North">North</option>
            <option value="NorthEast">NorthEast</option>
            <option value="East">East</option>
            <option value="SouthEast">SouthEast</option>
            <option value="South">South</option>
            <option value="SouthWest">SouthWest</option>
            <option value="West">West</option>
            <option value="NorthWest">NorthWest</option>
          </select>
        </div>
        <button className="btn" type="submit">
          Predict Price
        </button>
      </form>
      {prediction && (
        <p className="prediction">Predicted price: Rs. {prediction}</p>
      )}
    </div>
  );
};

export default App;

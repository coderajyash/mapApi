import React, { useState } from "react";
import "./App.css";
import SearchLocationInput from "./components/GooglePlacesApi";
import MapComponent from "./components/Map";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });
  const [selectedAddress, setSelectedAddress] = useState(""); // New state for address

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SearchLocationInput 
        setSelectedLocation={setSelectedLocation} 
        setSelectedAddress={setSelectedAddress} // Pass the address setter
      />
      <MapComponent selectedLocation={selectedLocation} />
      
      {/* Display selected address */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h3>Selected Address:</h3>
        <p>{selectedAddress}</p>
      </div>
    </div>
  );
}

export default App;

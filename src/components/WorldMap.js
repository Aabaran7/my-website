import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { travelEntries } from '../data/travel';
import 'leaflet/dist/leaflet.css';

const WorldMap = ({ visitedCountries = [], onCountryClick, onMapClick, travelEntries: propTravelEntries = [] }) => {
  const navigate = useNavigate();
  
  // Use prop travelEntries if provided, otherwise use imported data
  const entries = propTravelEntries.length > 0 ? propTravelEntries : travelEntries;
  
  // Country coordinates (longitude, latitude) for major cities
  const countryMarkers = [
    { id: 'us', name: 'United States', coords: [-95.7129, 37.0902] },
    { id: 'ca', name: 'Canada', coords: [-106.3468, 56.1304] },
    { id: 'uk', name: 'United Kingdom', coords: [-0.1278, 51.5074] },
    { id: 'fr', name: 'France', coords: [2.3522, 48.8566] },
    { id: 'de', name: 'Germany', coords: [10.4515, 51.1657] },
    { id: 'it', name: 'Italy', coords: [12.5674, 41.8719] },
    { id: 'es', name: 'Spain', coords: [-3.7492, 40.4637] },
    { id: 'jp', name: 'Japan', coords: [138.2529, 36.2048] },
    { id: 'au', name: 'Australia', coords: [133.7751, -25.2744] }
  ];

  const getMarkerStyle = (countryId) => {
    const isVisited = visitedCountries.includes(countryId);
    
    return {
      fillColor: isVisited ? '#3b82f6' : 'transparent',
      color: isVisited ? '#1d4ed8' : '#9ca3af',
      fillOpacity: isVisited ? 0.8 : 0,
      weight: isVisited ? 3 : 2,
      radius: isVisited ? 10 : 8
    };
  };

  const handleMarkerClick = (countryId) => {
    const isVisited = visitedCountries.includes(countryId);
    
    if (isVisited) {
      // Find the travel entry for this country
      const travelEntry = entries.find(entry => entry.countryCode === countryId);
      if (travelEntry) {
        // Navigate to travel page using the entry's numeric ID
        navigate(`/travel/${travelEntry.id}`);
      }
    } else if (onCountryClick) {
      // For unvisited countries, use the original handler
      onCountryClick(countryId);
    }
  };

  const handleMapClick = () => {
    if (onMapClick) {
      onMapClick();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">
        Travel Map
      </h3>
      
      <div className="bg-white rounded-lg border border-gray-200 p-4 relative z-10">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '400px', width: '100%' }}
          className="rounded-lg"
          onClick={handleMapClick}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {countryMarkers.map((country) => (
            <CircleMarker
              key={country.id}
              center={country.coords}
              pathOptions={getMarkerStyle(country.id)}
              eventHandlers={{
                click: () => handleMarkerClick(country.id),
                mouseover: (e) => {
                  const isVisited = visitedCountries.includes(country.id);
                  e.target.setStyle({
                    ...getMarkerStyle(country.id),
                    radius: isVisited ? 12 : 10,
                    fillOpacity: isVisited ? 0.9 : 0.1,
                    weight: isVisited ? 4 : 3
                  });
                },
                mouseout: (e) => {
                  e.target.setStyle(getMarkerStyle(country.id));
                }
              }}
            >
              <Popup>
                <div className="text-center">
                  <strong>{country.name}</strong>
                  <br />
                  {visitedCountries.includes(country.id) ? (
                    <>
                      ✅ Visited
                      <br />
                      <span className="text-sm text-blue-600">Click to see details</span>
                    </>
                  ) : (
                    '❌ Not visited yet'
                  )}
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Click on visited countries to see travel details</p>
        <p className="mt-1">
          Visited: {visitedCountries.length} countries
        </p>
        
        {/* Legend */}
        <div className="mt-4 flex justify-center items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-blue-700"></div>
            <span>Visited</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-gray-400 bg-transparent"></div>
            <span>Not visited</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap; 
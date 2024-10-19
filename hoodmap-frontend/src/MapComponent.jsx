import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
    return (
        <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Add markers here */}
        </MapContainer>
    );
};

export default MapComponent;

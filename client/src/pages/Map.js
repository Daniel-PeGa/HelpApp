import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div>
            <GoogleMap
                mapContainerStyle={{ width: '100vw', height: '100vh' }}
                zoom={8}
                center={{ lat: 41.3851, lng: 2.1734 }}
            >
                <Marker position={{ lat: 41.3851, lng: 2.1734 }} />
            </GoogleMap>
        </div>
    );
}



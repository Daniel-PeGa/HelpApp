import React from 'react';

const movingServices = [
    {
        id: 0,
        title: "hardcoded Moving services Company Name",
        description: "hardcoded Moving services description"
    }
]

function Moving() {
    return (
        <div className="serviceContainer">
            <h1>Moving</h1>
            <div>
                {movingServices.map((service) => (
                    <div key={service.id}>
                        <h2 className="serviceContent">{service.title}</h2>
                        <p className="serviceContent">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Moving;
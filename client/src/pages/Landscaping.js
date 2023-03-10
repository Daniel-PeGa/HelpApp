import React from 'react';

const landscapingServices = [
    {
        id: 0,
        title: "hardcoded Landscaping services Company Name",
        description: "hardcoded Landscaping services description"
    }
]

function Landscaping() {
    return (
        <div className="serviceContainer">
            <h1>Landscaping</h1>
            <div>
                {landscapingServices.map((service) => (
                    <div key={service.id}>
                        <h2 className="serviceContent">{service.title}</h2>
                        <p className="serviceContent">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Landscaping;
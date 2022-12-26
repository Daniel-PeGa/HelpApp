import React from 'react';

const pestServices = [
    {
        id: 0,
        title: "hardcoded Pest services Company Name",
        description: "hardcoded Pest services description"
    }
]

function Pest() {
    return (
        <div className="serviceContainer">
            <h1>Pest</h1>
            <div>
                {pestServices.map((service) => (
                    <div key={service.id}>
                        <h2 className="serviceContent">{service.title}</h2>
                        <p className="serviceContent">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pest;
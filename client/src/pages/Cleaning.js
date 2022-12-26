import React from 'react';

const cleaningServices =[
    {
        id: 0,
        title: "hardcoded Cleaning services Company Name",
        description: "hardcoded Cleaning services description"
    }
]

function Cleaning() {
    return (
        <div className="serviceContainer">
            <h1>Cleaning</h1>
            <div>
                {cleaningServices.map((service) => (
                    <div key={service.id}>
                        <h2 className="serviceContent">{service.title}</h2>
                        <p className="serviceContent">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cleaning;
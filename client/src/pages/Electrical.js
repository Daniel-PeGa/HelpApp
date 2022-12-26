import React from 'react';

const electricalServices = [
    {
        id: 0,
        title: "hardcoded Electrical services Company Name",
        description: "hardcoded Electrical services description"
    }
]

function Electrical() {
    return (
        <div className="serviceContainer">
            <h1>Electrical</h1>
            <div>
                {electricalServices.map((service) => (
                    <div key={service.id}>
                        <h2 className="serviceContent">{service.title}</h2>
                        <p className="serviceContent">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Electrical;
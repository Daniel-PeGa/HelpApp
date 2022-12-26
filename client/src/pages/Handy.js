import React from 'react';

const handyServices = [
    {
        id: 0,
        title: "hardcoded Handy services Company Name",
        description: "hardcoded Handy services description"
    }
]

function Handy() {
    return(
        <div className="serviceContainer">
            <h1>Handy</h1>
            <div>
                {handyServices.map((service) => (
                    <div key={service.id}>
                        <h2 className="serviceContent">{service.title}</h2>
                        <p className="serviceContent">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Handy;

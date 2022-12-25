import React from 'react';

const landscapingServices = [
    {
        id: 0,
        title: "hardcoded Landscaping services"
    }
]

function Landscaping() {
    return (
        <div>
        <p className="content is-medium">Portfolio</p>
        <hr />
  
        <Landscaping landscapingServices={landscapingServices} />
      </div>
  
    )
}

export default Landscaping;
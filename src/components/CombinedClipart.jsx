import React from 'react'

function CombinedClipart({exteriorPicture,interiorPicture}) {
  return (
    <div className='combined-clipart-component'>
        <img src={exteriorPicture} alt="img" width={"92px"} height="92px" />
        <div className='interior'>
            <img src={interiorPicture} alt="img" />
        </div>
    </div>
  )
}

export default CombinedClipart
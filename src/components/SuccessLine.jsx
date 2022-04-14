import React from 'react'
import DoneIcon from '@mui/icons-material/Done';


{/**

  list success icon

ex;
    ✓ text
**/}


function SuccessLine({text,color}) {
  return (
    <div className='confirmline-component d-flex align-items-center'>
         <DoneIcon color={color ? color : 'success'} /> {text}
    </div>
  )
}

export default SuccessLine
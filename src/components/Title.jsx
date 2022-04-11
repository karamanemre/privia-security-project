import React from 'react'

function Title({titleone,titletwo,width,subtitle}) {
  return (
    <div className='title-component d-flex justify-content-center'style={{fontSize:"40px"}} >
        <div>
            <div className='main-title'>{titleone}</div>
            <span className='main-title'>{titletwo}</span>
            {subtitle && <div className='text-muted sub-title'>{subtitle}</div> } 
        </div>
    </div>
  )
}

export default Title
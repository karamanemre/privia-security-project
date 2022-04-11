import React from 'react'

function Logo({src,alt,height,width}) {
  return (
    <img src={src} alt={alt ? alt : "image"} height={height} width={width} />
  )
}

export default Logo
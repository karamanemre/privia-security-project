import React from 'react'

{/**
Package descriptions 
on the pricing page
ex.

Standart is for you if...
--------------------------
Quisque aliquam porta bibendum. Donec ornare massa ligula, nec venenatis ipsum aliquam non. 
Ut varius enim nec tellus interdum ultrices. Vivamus sodales finibus eros, sed varius mauris
varius a. Vestibulum nec ligula bibendum lorem ornare tempus vel quis turpis. Cras risus
tortor, vulputate tristique ipsum non, auctor sollicitudin ipsum. 
**/}

function StatementCard({hrColor,title,description}) {
  return (
    <div className="card">
    <div className="header"><strong>{title}</strong></div>
    <hr style={{color:hrColor}} />
    <div className="body">
     {description}
    </div>
  </div>
  )
}

export default StatementCard
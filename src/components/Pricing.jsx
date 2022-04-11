import React from 'react'
import Button from './Button'

function Pricing({color}) {
  return (
    <div className='pricing-component d-flex flex-column' style={{backgroundColor:color}}>
        <div className="head">
            <span>$23</span> /month
        </div>
        <div className="description">
            <strong>Standard</strong>
            <p>All the basics for businesses that are just getting started.</p>
        </div>
        <hr />
        <div className="body">
            <ul>
                <li>Single project use</li>
                <li>Basic dashboard</li>
                <li>All components included</li>
            </ul>
        </div>
        <div className="button ">
            <Button color={"white"} text={"Start free trial"} width={"90%"} borderRadius={"5px"} height={"35px"} className={"text-dark"}/>
        </div>
    </div>
  )
}

export default Pricing
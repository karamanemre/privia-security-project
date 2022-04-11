import React from 'react'

function DataAnalytics() {
  return (
    <div className='data-analytics d-flex flex-column'>
        <div className="header">
            <div className="title flex-column">
                <h5>Data Analytics</h5>
                <small>See insight on how your business has changed over time</small>
            </div>
            <div className="dropdown-bar">
                Dropdown bar
            </div>
        </div>
        <div className="data d-flex justify-content-between align-items-center">
            <div className="item d-flex  flex-column ">
                <span>86</span>
                <span>41</span>
            </div>
            <div className="items justify-content-center">
                <span>54</span>
                <span>54</span>
            </div>
        </div>
    </div>
  )
}

export default DataAnalytics
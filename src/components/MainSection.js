import React from 'react'
import './MainSection.css'

function MainSection({name, header}) {
  return (
    <div className="main">
        <div className="main-container">
            <div className="main-name">
                {name}
            </div>
            <div className="main-header">
                {header}
            </div>
        </div>
    </div>
  )
}

export default MainSection
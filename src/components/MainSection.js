import React from 'react'
import './MainSection.css'

function MainSection({name, pOne, pTwo, pThree}) {
  return (
    <div className="main">
        <div className="main-container">
            <div className="main-header">
                {name}
            </div>
            <div className="main-pOne">
                {pOne}
            </div>
            <div className="main-pTwo">
                {pTwo}
            </div>
        </div>
    </div>
  )
}

export default MainSection
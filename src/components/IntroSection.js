import React from 'react'

function IntroSection({name, header}) {
  return (
    <div className="intro">
        <div className="intro-container">
            <div className="intro-name">
                {name}
            </div>
            <div className="intro-header">
                {header}
            </div>
        </div>
    </div>
  )
}

export default IntroSection
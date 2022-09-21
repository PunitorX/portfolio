import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Cards.css'
import { Button } from './Button'
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi'

function Card({name, body, list, git, link}) {

    

    return (
        <div className="card-container">
            <div className="card-title">
                <h3>{name}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className="card-list">
                {list}
            </div>
            <div className="card-icons">
                <div onClick={git} className="card-icon-item">
                    <BsGithub />
                </div>
                <div onClick={link} className="card-icon-item">
                    <BiLinkExternal />
                </div>
            </div>
        </div>
    )
}

export default Card;
import React from 'react'
import './Cards.css'
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi'

function Card({name, body, list, git, link}) {
    const handleClick = () => {
        onclick=(git);
    }
    

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
                <a href={git} className="card-icon-item">
                    <BsGithub />
                </a>
                <a href={link} className="card-icon-item">
                    <BiLinkExternal />
                </a>
            </div>
        </div>
    )
}

export default Card;
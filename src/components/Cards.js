import React from 'react'
import { Link } from 'react-router-dom';
import './Cards.css'
import { Button } from './Button'
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi'

function Card({name, body, list}) {
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
                <div  className="card-icon-item">
                    <BsGithub />
                </div>
                <div className="card-icon-item">
                    <BiLinkExternal />
                </div>
            </div>
            {/* <div className="card-btn">
                {Button ? (
                    <Link to='../../Resume.pdf' target='_blank' className='btn-link'>
                        <Button buttonStyle='primary' buttonColor='btn-dark'>Code</Button>
                    </Link>
                ) : (
                    <Link to='../../Resume.pdf' target='_blank' className='btn-link'>
                        <Button buttonStyle='primary' buttonColor='btn-light'>Code</Button>
                    </Link>
                )}
            </div> */}
        </div>
    )
}

export default Card;
import React, {useState} from 'react'
import './Card.css'
import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

const Size = ['large', 'medium', 'wide']

const Color = ['primary', 'secondary', 'third']

// const checkCardSize = Size.includes(cardSize) ? cardSize : Size[0];

// const checkCardColor = Color.includes(cardColor) ? cardColor : Color[0];

function Cards({name, body, list, git, link}) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const closeMobile = () => setClick(false);

    return (
        <>
            <div className="medium">
                <div>
                <div className='small-card-body'>
                    <h2 layout='position' className='small-card-h2'>
                        {name}
                    </h2>
                    <div className='small-card-desc'>
                        {body}
                    </div>
                    <div className="small-card-list">
                        {list}
                    </div>
                    <div className="small-card-icons">
                        <a href={git} className="small-card-icon-item">
                                <BsGithub />
                        </a>
                        <a href={link} className="small-card-icon-item">
                            <BiLinkExternal />
                        </a>
                    </div>    
                </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
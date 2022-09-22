import React, {useState} from 'react'
import {motion} from 'framer-motion'
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
                <motion.div transition={{layout: {mass: .5, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='small-card-body' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '400px', cursor: 'pointer'}}>
                    <motion.h2 layout='position' className='small-card-h2'>
                        {name}
                    </motion.h2>
                    {isOpen && (
                        <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{duration: 1}}
                        style={{height: '285px'}}
                        className='expand'>
                            <p className='small-card-body'>
                                {body}
                            </p>
                            <motion.div className="small-card-list">
                                {list}
                            </motion.div>
                            <motion.div className="small-card-icons">
                                <a href={git} className="small-card-icon-item">
                                    <BsGithub />
                                </a>
                                <a href={link} className="small-card-icon-item">
                                    <BiLinkExternal />
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
                </div>
            </div>
        </>
    );
}

export default Cards;
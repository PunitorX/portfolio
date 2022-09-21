import React, {useState} from 'react'
import {motion} from 'framer-motion'
import './Card.css'

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
            <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
                <motion.img layout='position' src="./images/hardware.png" alt="hardware" className='card-img'/>
                <motion.h2 layout='position' className='card-h2'>
                    {name}
                </motion.h2>
                {isOpen && (
                    <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{duration: 1}}
                    className='expand'>
                        <p>
                            {body}
                        </p>
                        <motion.div className="card-list">
                            {list}
                        </motion.div>
                        <motion.div className="card-icons">
                            <a href={git} className="card-icon-item">
                                <BsGithub />
                            </a>
                            <a href={link} className="card-icon-item">
                                <BiLinkExternal />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
            </div>
        </>
    );
}
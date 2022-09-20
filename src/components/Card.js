import React from 'react'
import './Card.css'

const Style = ['primary', 'secondary']

const Size = ['large', 'medium', 'small']

const Color = ['card-dark', 'card-light']

export const Card = ({cardStyle, cardSize, cardColor, children}) => {
    const checkCardStyle = Style.includes(cardStyle) ? cardStyle : Style[0];

    const checkCardSize = Size.includes(cardSize) ? cardSize : Size[0];

    const checkCardColor = Color.includes(cardColor) ? cardColor : Color[0];

    return (
        <Card className={`card ${checkCardStyle} ${checkCardSize} ${checkCardColor}`}>{children}</Card>
    );
}


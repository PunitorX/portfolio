import React from 'react'
import './Card.css'

const Style = ['primary', 'secondary']

const Size = ['large', 'medium', 'small']

const Color = ['card-dark', 'card-light']

export const Card = ({cardStyle, cardSize,cardColor, children}) => {
    const checkCardStyle = Style.includes(cardStyle) ? cardStyle : Style[0];

    const checkCardSize = Style.includes(cardSize) ? cardSize : Size[0];

    const checkCardColor = Style.includes(cardColor) ? cardColor : Color[0];

    return (
        <Card className={`btn ${checkCardStyle} ${checkCardSize} ${checkCardColor}`}>{children}</Card>
    );
}
import React from 'react'
import {useState} from 'react'
import './Button.css'

const STYLES = ['primary']

const COLOR = ['btn-dark', 'btn-light']


export const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonColor}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    );
}
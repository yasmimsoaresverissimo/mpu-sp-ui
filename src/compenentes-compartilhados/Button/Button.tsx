import React from "react";
import './Button.css'

declare interface ButtonProps {
    content?: string
    onClick?: () => void
    value?: string
    appnedIcon?: any
}

const Button: React.FC<ButtonProps> = (props) => {

    return <button 
            className="AppButton"
            onClick={ props.onClick }
            color="red"
        >
            { props.value }
        </button>
}

export default Button
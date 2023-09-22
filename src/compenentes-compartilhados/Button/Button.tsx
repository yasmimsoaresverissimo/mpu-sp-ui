import React from "react";
import './Button.css'

declare interface ButtonProps {
    content?: string
    onClick?: () => void
    value?: string
    appnedIcon?: any
    color?: any
}

const Button: React.FC<ButtonProps> = (props) => {

if(props.color === 'primary'){
    return <button 
            className="AppButtonPrimary"
            onClick={ props.onClick }
            color="red"
        >
            { props.value }
        </button>
        }

else if(props.color ==='danger'){
        return <button 
            className="AppButton AppButtonDanger"
            onClick={ props.onClick }
            color="red"
        >
            { props.value }
        </button>


}

else if(props.color === 'alert'){
               return <button 
            className="AppButton AppButtonAlert"
            onClick={ props.onClick }
            color="red"
        >
            { props.value }
        </button>
 

}

else{
    return <button 
            className="AppButton AppButtonPrimary"
            onClick={ props.onClick }
            color="red"
        >
            { props.value }
        </button>
 

}

}

export default Button
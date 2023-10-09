import React from 'react'
import './InputGroup.css'
import SearchIcon from '@mui/icons-material/Search';


declare interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    onClick?: () => void
}

const InputGroup: React.FC<InputProps> = (props) => {
    
    return   <div className="flex-container">
            
                <div><input { ...props } /></div>
                <div><button onClick={ props.onClick }><SearchIcon></SearchIcon></button></div>
            </div>
}

export default InputGroup
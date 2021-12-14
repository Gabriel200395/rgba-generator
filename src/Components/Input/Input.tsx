import "./style.css"
import React, { ChangeEvent } from 'react';


interface InputProps {
   className: string
   state: number 
   onChange: (event: ChangeEvent<HTMLInputElement>) => void 
   name: string
}


const Input: React.FC<InputProps> = ({className, state, onChange, name}) => {
  return (
    <div className={className}>
    <input
      type="range"
      name={name}
      value={state}
      onChange={onChange}
      min="0"
      max="255"
    />
  </div>
  );
}

export default Input;
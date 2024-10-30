import React from "react";
import "./Button.scss";

interface ButtonProps {
    onClick: () => void;
    text:string
  }
  
  const Button = ({ onClick, text }:ButtonProps) => {
    const handleClick = () => {
      // alert("You had already pushed the button");
  
      
    };
  
    return (
      <button className="button" onClick={handleClick}>
        {text} 
      </button>
    );
  };
  
  export default Button;
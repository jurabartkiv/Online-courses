import React from "react";
import "./Button.sass";

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    // alert("You had already pushed the button");

    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      View Courses
    </button>
  );
};

export default Button;

import React, { MouseEventHandler } from 'react';
import './Button.css';

interface IButtonProps {
    buttonText: string;
    onButtonClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<IButtonProps> = ({ buttonText, onButtonClick }) => {
    return (
        <div className="Button">
            <button type="button" className="button" onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    );
};

export default Button;

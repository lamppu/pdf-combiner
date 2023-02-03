import React, { MouseEventHandler } from 'react';
import './Button.css';

interface IButtonProps {
    buttonText: string;
    onButtonClick: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled: boolean;
}

const Button: React.FC<IButtonProps> = ({ buttonText, onButtonClick, disabled }) => {
    return (
        <button type="button" className="Button" onClick={onButtonClick} disabled={disabled}>
            {buttonText}
        </button>
    );
};

export default Button;

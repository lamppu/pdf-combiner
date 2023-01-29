import React, { MouseEventHandler } from 'react';
import './CombineFilesButton.css';

interface IButtonProps {
    buttonText: string;
    onButtonClick: MouseEventHandler<HTMLButtonElement>;
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

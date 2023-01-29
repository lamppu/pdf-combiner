import React from 'react';
import './PDFDownloadButton.css';
import Button from '../Button/Button';

interface IDownloadProps {
    mergedPDFUrl: string;
}

const PDFDownloadButton: React.FC<IDownloadProps> = ({ mergedPDFUrl }) => {
    if (mergedPDFUrl !== '') {
        return (
            <div className="PDFCombiner">
                <a href={mergedPDFUrl} download="combined">
                    <Button buttonText="Download" onButtonClick={void 0} />
                </a>
            </div>
        );
    }
    return null;
};

export default PDFDownloadButton;

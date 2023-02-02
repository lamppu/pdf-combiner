import React from 'react';
import './PDFDownloadButton.css';
import Button from '../Button/Button';

interface IDownloadProps {
    mergedPDFUrl: string;
}

const PDFDownloadButton: React.FC<IDownloadProps> = ({ mergedPDFUrl }) => {
    if (mergedPDFUrl !== '') {
        return (
            <div className="PDFDownloadButton">
                <a href={mergedPDFUrl} download="combined" id="downloadAnchor">
                    <Button buttonText="Download" onButtonClick={void 0} disabled={false} />
                </a>
            </div>
        );
    }
    return null;
};

export default PDFDownloadButton;

import React, { Dispatch, SetStateAction } from 'react';
import './CombineFilesButton.css';
import PDFMerger from 'pdf-merger-js/browser';
import Button from '../Button/Button';

interface IProps {
    files: Blob[];
    onMergedPDFUrlChange: Dispatch<SetStateAction<string>>;
}

const CombineFilesButton: React.FC<IProps> = ({ files, onMergedPDFUrlChange }) => {
    const onButtonClick = async () => {
        if (files) {
            const merger = new PDFMerger();
            for (const file of files) {
                await merger.add(file);
            }
            const mergedPdf = await merger.saveAsBlob();
            const url = URL.createObjectURL(mergedPdf);
            onMergedPDFUrlChange(url);
        }
    };
    let buttonDisabled = false;
    if (files.length < 2) {
        buttonDisabled = true;
    }
    return (
        <div className="CombineFilesButton">
            <Button buttonText="Combine files" onButtonClick={onButtonClick} disabled={buttonDisabled} />
        </div>
    );
};

export default CombineFilesButton;

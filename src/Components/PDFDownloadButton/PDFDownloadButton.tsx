import React from 'react';
import './PDFDownloadButton.css';
import Button from '../Button/Button';
import { ColorRing } from 'react-loader-spinner';

interface IDownloadProps {
    mergedPDFUrl: string;
    merging: boolean;
}

const PDFDownloadButton: React.FC<IDownloadProps> = ({ mergedPDFUrl, merging }) => {
    React.useEffect(() => {
        const ringDiv = document.getElementById('ringDiv');
        if (ringDiv) {
            ringDiv.scrollIntoView({ behavior: 'smooth' });
        }
    });

    if (merging) {
        return (
            <div id="ringDiv" className="download">
                <ColorRing
                    visible={true}
                    height="56.25"
                    width="56.25"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#F0FAF8', '#C2EBE4', '#94DBD1', '#66CCBD', '#3DB8A5']}
                />
            </div>
        );
    }
    if (mergedPDFUrl !== '') {
        return (
            <div className="PDFDownloadButton download">
                <a href={mergedPDFUrl} download="combined" id="downloadAnchor">
                    <Button buttonText="Download" onButtonClick={void 0} disabled={false} />
                </a>
            </div>
        );
    }
    return null;
};

export default PDFDownloadButton;

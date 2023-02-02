import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CombineFilesButton from './Components/CombineFilesButton/CombineFilesButton';
import PDFUploader from './Components/PDFUploader/PDFUploader';
import PDFDownloadButton from './Components/PDFDownloadButton/PDFDownloadButton';

function App() {
    const [files, setFiles] = useState<Blob[]>([]);
    const [mergedPDFUrl, setMergedPdfUrl] = useState<string>('');
    const [merging, setMerging] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    return (
        <div className="App">
            <Header />
            <PDFUploader files={files} onFilesChange={setFiles} onErrorChange={setError} />
            <CombineFilesButton
                files={files}
                onMergedPDFUrlChange={setMergedPdfUrl}
                onMergingChange={setMerging}
                error={error}
            />
            <PDFDownloadButton mergedPDFUrl={mergedPDFUrl} merging={merging} />
        </div>
    );
}

export default App;

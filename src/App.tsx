import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CombineFilesButton from './Components/CombineFilesButton/CombineFilesButton';
import PDFUploader from './Components/PDFUploader/PDFUploader';
import PDFDownloadButton from './Components/PDFDownloadButton/PDFDownloadButton';

function App() {
    const [files, setFiles] = useState<Blob[]>([]);
    const [mergedPDFUrl, setMergedPdfUrl] = useState<string>('');
    return (
        <div className="App">
            <Header />
            <PDFUploader files={files} onFilesChange={setFiles} />
            <CombineFilesButton files={files} onMergedPDFUrlChange={setMergedPdfUrl} />
            <PDFDownloadButton mergedPDFUrl={mergedPDFUrl} />
        </div>
    );
}

export default App;

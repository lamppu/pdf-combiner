import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CombineFilesButton from './Components/CombineFilesButton/CombineFilesButton';
import PDFUploader from './Components/PDFUploader/PDFUploader';

function App() {
    const [files, setFiles] = useState<Blob[]>([]);
    const [mergedPDFUrl, setMergedPdfUrl] = useState<string>('');
    return (
        <div className="App">
            <Header />
            <PDFUploader files={files} onFilesChange={setFiles} />
            <CombineFilesButton files={files} onMergedPDFUrlChange={setMergedPdfUrl} />
        </div>
    );
}

export default App;

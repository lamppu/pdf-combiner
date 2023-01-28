import { ActualFileObject, FilePondInitialFile } from 'filepond';
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import PDFUploader from './Components/PDFUploader/PDFUploader';

function App() {
    const [files, setFiles] = useState<(FilePondInitialFile | ActualFileObject | Blob | string)[]>([]);
    return (
        <div className="App">
            <Header />
            <PDFUploader files={files} onFilesChange={setFiles} />
        </div>
    );
}

export default App;

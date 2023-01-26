import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import PDFUploader from './Components/PDFUploader/PDFUploader';

function App() {
    return (
        <div className="App">
            <Header />
            <PDFUploader />
        </div>
    );
}

export default App;

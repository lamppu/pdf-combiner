import React, { useState } from 'react';
import './PDFUploader.css';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { ActualFileObject, FilePondInitialFile, FilePondFile } from 'filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';

registerPlugin(FilePondPluginFileValidateType);

function PDFUploader() {
    const [files, setFiles] = useState<(FilePondInitialFile | ActualFileObject | Blob | string)[]>([]);

    const setFilesHelper = (filesList: FilePondFile[]) => {
        console.log('---------');
        setFiles(
            filesList.map((file) => {
                console.log(file.file.name);
                return file.file;
            }),
        );
    };

    return (
        <div className="PDFUploader">
            <FilePond
                files={files}
                onupdatefiles={setFilesHelper}
                allowMultiple={true}
                allowReorder={true}
                onreorderfiles={setFilesHelper}
                acceptedFileTypes={['application/pdf']}
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    );
}

export default PDFUploader;

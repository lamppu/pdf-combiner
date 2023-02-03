import React, { Dispatch, SetStateAction } from 'react';
import './PDFUploader.css';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { FilePondFile } from 'filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';

registerPlugin(FilePondPluginFileValidateType);

interface IFilesProps {
    files: Blob[];
    onFilesChange: Dispatch<SetStateAction<Blob[]>>;
    onErrorChange: Dispatch<SetStateAction<boolean>>;
}

const PDFUploader: React.FC<IFilesProps> = ({ files, onFilesChange, onErrorChange }) => {
    const setFilesHelper = (filesList: FilePondFile[]) => {
        onErrorChange(false);
        const mapped = filesList.map((file) => {
            if (file.file.type !== 'application/pdf') {
                onErrorChange(true);
            }
            return file.file;
        });
        onFilesChange(mapped);
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
                labelIdle='Drag & Drop your PDF files or <span class="filepond--label-action">Browse</span>'
                itemInsertLocation={'after'}
            />
        </div>
    );
};

export default PDFUploader;

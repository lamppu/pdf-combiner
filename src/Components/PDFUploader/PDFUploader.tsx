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
}

const PDFUploader: React.FC<IFilesProps> = ({ files, onFilesChange }) => {
    const setFilesHelper = (filesList: FilePondFile[]) => {
        onFilesChange(
            filesList.map((file) => {
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
};

export default PDFUploader;

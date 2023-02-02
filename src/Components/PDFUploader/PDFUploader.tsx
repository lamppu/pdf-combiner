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
            return file.file;
        });
        for (const file of mapped) {
            if (file.type !== 'application/pdf') {
                onErrorChange(true);
            }
        }
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
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    );
};

export default PDFUploader;

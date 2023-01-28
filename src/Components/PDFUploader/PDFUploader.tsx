import React, { Dispatch, SetStateAction } from 'react';
import './PDFUploader.css';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { ActualFileObject, FilePondInitialFile, FilePondFile } from 'filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';

registerPlugin(FilePondPluginFileValidateType);

interface IFilesProps {
    files: (FilePondInitialFile | ActualFileObject | Blob | string)[];
    onFilesChange: Dispatch<SetStateAction<(string | FilePondInitialFile | Blob | ActualFileObject)[]>>;
}

const PDFUploader: React.FC<IFilesProps> = ({ files, onFilesChange }) => {
    const setFilesHelper = (filesList: FilePondFile[]) => {
        console.log('---------');
        onFilesChange(
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
};

export default PDFUploader;

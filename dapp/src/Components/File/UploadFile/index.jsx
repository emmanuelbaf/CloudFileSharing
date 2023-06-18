import { useState, useEffect } from 'react';
import { FOLDER, SUCCESS, UPLOADED } from '../../../assets/svgImages';
import { extensions } from '../../../utilities/utils';
import styles from './uploadFiles.module.scss';

const UploadFile = () => {
  const [error, setError] = useState('');
  const [uploaded, setUploaded] = useState('');
  const [fileInfo, setFileInfo] = useState({ fileName: '', fileExtension: '' });

  const handleFileChange = (e) => {
    setError('');
    const file = e.target.files[0];
    const allowedExtensions = extensions;

    if (file) {
      const extension = file.name.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(extension)) {
        setError(
          `Invalid file type. Please upload a ${allowedExtensions[0]} file.`
        );

        e.target.value = ''; // Reset the file input
        return;
      }
      setUploaded(file);
      console.log;
      setFileInfo({
        fileName: file.name.substring(0, 4),
        fileExtension: extension,
      });
      // Proceed with file upload logic
      // ...
    }
  };

  useEffect(() => {
    console.log(uploaded); // Log the updated value of uploaded
  }, [uploaded]);

  return (
    <div className={styles.uploadContainer}>
      {error && <span className={styles.uploadContainer__error}>{error}</span>}
      <div className={styles.uploadContainer__inputContainer}>
        <label htmlFor='fileInput' className={styles.uploadContainer__label}>
          <span className={styles.uploadContainer__svgContainer}>
            {uploaded ? (
              <img src={SUCCESS} alt='upload' />
            ) : (
              <img src={UPLOADED} alt='upload' />
            )}
          </span>
          <span className={styles.uploadContainer__text}>
            {uploaded
              ? `${fileInfo.fileName}...${fileInfo.fileExtension}`
              : 'Upload'}
          </span>
        </label>
        <input
          type='file'
          name=''
          id=''
          placeholder='upload'
          onChange={handleFileChange}
          className={styles.uploadContainer__input}
        />
      </div>
      <div className={styles.uploadContainer__createFolder}>
        <span className={styles.uploadContainer__createFolderSvg}>
          <img src={FOLDER} alt='folder' />
        </span>
        <span>create folder</span>
      </div>
    </div>
  );
};

export default UploadFile;

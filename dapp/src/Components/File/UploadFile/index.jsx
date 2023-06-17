import { FOLDER, UPLOAD, UPLOADED } from '../../../assets/svgImages';
import styles from './uploadFiles.module.scss';

const UploadFile = () => {
  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadContainer__inputContainer}>
        <label htmlFor='fileInput' className={styles.uploadContainer__label}>
          <span className={styles.uploadContainer__svgContainer}>
            <img src={UPLOADED} alt='upload' />
          </span>
          <span className={styles.uploadContainer__text}>Upload</span>
        </label>
        <input
          type='file'
          name=''
          id=''
          placeholder='upload'
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

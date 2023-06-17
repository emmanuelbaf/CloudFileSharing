import SearchInput from './SearchInput';
import UploadFile from './UploadFile';
import styles from './fileStyles.module.scss';

const File = () => {
  return (
    <div className={styles.fileContainer}>
      <div className={styles.fileContainer__uploadFileContainer}>
        <UploadFile />
      </div>
      <div className={styles.fileContainer__search}>
        <SearchInput />
      </div>
    </div>
  );
};

export default File;

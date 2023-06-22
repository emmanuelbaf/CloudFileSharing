import { useState } from 'react';
import Modal from '../../Modal';
import Result from '../../Result';
import {
  useStorageUpload,
  useContractWrite,
  useContract,
} from '@thirdweb-dev/react';
import { FOLDER, SUCCESS, UPLOADED } from '../../../assets/svgImages';
import { contractAddress, extensions } from '../../../utilities/utils';
import styles from './uploadFiles.module.scss';

const UploadFile = () => {
  const [fileInputKey, setFileInputKey] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [uploaded, setUploaded] = useState(null);
  const [fileInfo, setFileInfo] = useState({ fileName: '', fileExtension: '' });
  const [ipfsUrl, setIpfsUrl] = useState('');

  const { mutateAsync: upload } = useStorageUpload();
  const { contract } = useContract(contractAddress);
  const { mutateAsync: addCID } = useContractWrite(contract, 'addCID');

  // **********GETCIDs FUNCTIONS***********************

  // const handleGetUserCIDs = async () => {
  //   const data = await contract.call('getUserCIDs', []);
  //   console.log(data);
  // };

  //  *****************************************

  const closeModal = () => {
    if (!isLoading) {
      setShowModal(false);
      setIsLoading(false);
      setIsSuccessful(false);
      setError('');
    }
  };

  const uploadToIpfs = async () => {
    if (!uploaded) {
      setError('Please add a file to upload.');
      return;
    }

    setShowModal(true);
    setIsLoading(true);

    try {
      const [uploadUrl] = await upload({
        data: [uploaded],
        options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
      });

      const stringAfterIpfs = uploadUrl.split('ipfs/')[1];
      setIpfsUrl(uploadUrl);

      try {
        await addCID({ args: [stringAfterIpfs] });
        setFileInputKey((prevKey) => prevKey + 1);
        setIsSuccessful(true);
      } catch (err) {
        setIsSuccessful(false);
        setError('An error occurred.');
      }
    } catch (error) {
      setIsSuccessful(false);
      setError('IPFS upload failure.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setError('');
    const file = e.target.files[0];
    const allowedExtensions = extensions;

    if (file) {
      const extension = file.name.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(extension)) {
        setError(
          `Invalid file type. Please upload a ${allowedExtensions.join(
            ', '
          )} file.`
        );
        e.target.value = '';
        return;
      }

      setUploaded(file);
      setFileInfo({
        fileName: file.name.substring(0, 4),
        fileExtension: extension,
      });
    }
  };

  return (
    <>
      {showModal && (
        <Modal onClick={closeModal}>
          {isLoading ? (
            <Result text='Uploading file...' />
          ) : isSuccessful ? (
            <Result text='Successful!' color='green' />
          ) : (
            <Result text='An error occurred!!!' color='red' />
          )}
        </Modal>
      )}
      <div className={styles.uploadContainer}>
        {error && (
          <span className={styles.uploadContainer__error}>{error}</span>
        )}
        <div className={styles.uploadContainer__inputContainer}>
          <label htmlFor='fileInput' className={styles.uploadContainer__label}>
            <span className={styles.uploadContainer__svgContainer}>
              <img src={uploaded ? SUCCESS : FOLDER} alt='upload' />
            </span>
            <span className={styles.uploadContainer__text}>
              {uploaded
                ? `${fileInfo.fileName}...${fileInfo.fileExtension}`
                : 'Add File'}
            </span>
          </label>
          <input
            type='file'
            id='fileInput'
            onChange={handleFileChange}
            className={styles.uploadContainer__input}
            key={fileInputKey}
          />
        </div>
        <div
          className={styles.uploadContainer__createFolder}
          onClick={uploadToIpfs}
        >
          <span className={styles.uploadContainer__createFolderSvg}>
            <img src={UPLOADED} alt='folder' />
          </span>
          <span>Upload</span>
        </div>
      </div>
    </>
  );
};

export default UploadFile;

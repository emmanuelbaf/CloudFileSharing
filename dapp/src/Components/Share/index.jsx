import { useState } from 'react';
import styles from './shareStyles.module.scss';
import { contractAddress } from '../../utilities/utils';
import { useContract, useContractWrite, useAddress } from '@thirdweb-dev/react';
import Result from '../Result';

const Share = (props) => {
  const [receiver, setReceiver] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState({
    flag: false,
    message: 'Invalid Address',
  });

  const { contract } = useContract(contractAddress);
  const { mutateAsync: shareCID } = useContractWrite(contract, 'shareCID');
  const address = useAddress();

  const call = async () => {
    props.setIsLoading(true);
    setError({ ...error, flag: false });

    if (!receiver) {
      props.setIsLoading(false);
      setError({ ...error, flag: true });
      return;
    }

    try {
      const data = await shareCID({
        args: [receiver, props.uri],
      });

      setIsSuccessful(true);
    } catch (err) {
      setIsError(true);
      console.error('contract call failure', err.message);
    } finally {
      props.setIsLoading(false);
      setReceiver('');
    }
  };

  return (
    <>
      {props.isLoading ? (
        <Result text='Sending File...' />
      ) : isSuccessful ? (
        <Result text='Successful!' color='green' />
      ) : isError ? (
        <Result text='An Error occurred!!!' color='red' />
      ) : (
        <div
          className={styles.share}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {error.flag && (
            <span className={styles.share__error}>{error.message}</span>
          )}
          <label htmlFor='address' className={styles.share__label}>
            Input receiver&#39;s address
          </label>
          <input
            type='text'
            name='address'
            id='address'
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            placeholder='1X9btewmo.....'
            className={styles.share__input}
          />
          <button className={styles.share__button} onClick={call}>
            Share
          </button>
        </div>
      )}
    </>
  );
};

export default Share;

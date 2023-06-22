import { useState } from 'react';
import styles from './filesInfoStyles.module.scss';
import { useContractRead, useContract } from '@thirdweb-dev/react';
import { url, data, contractAddress } from '../../utilities/utils';
import Modal from '../Modal';
import Share from '../Share';

const FilesInfo = () => {
  const [uri, setUri] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const addr = window.location.href.split('/');
  const title = addr[addr.length - 1];
  const { contract } = useContract(contractAddress);
  // const { data: Uris } = useContractRead(contract, 'getUserCIDs', []);

  const handleOpenModal = (addrs) => {
    setUri(addrs);
    setShowModal(true);
  };

  const closeModal = () => {
    if (!isLoading) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal && (
        <Modal onClick={closeModal}>
          <Share uri={uri} isLoading={isLoading} setIsLoading={setIsLoading} />
        </Modal>
      )}
      <section className={styles.filesInfo}>
        <div className={styles.filesInfo__titleContainer}>
          <h1>{`${title === 'dashboard' ? 'All' : title} Files`}</h1>
        </div>

        <table className={styles.filesInfo__table}>
          <thead>
            <tr>
              <th className={styles.filesInfo__tableHeaderCellOne}>File Uri</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data ? (
              data.map((item, index) => {
                return (
                  <tr
                    className={styles.filesInfo__tableBodyCellOne}
                    key={index}
                  >
                    <td>{item}</td>
                    <td>N/A</td>
                    <td>
                      <div className={styles.filesInfo__buttonContainer}>
                        <a
                          href={url(item)}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <button>view file</button>
                        </a>
                        <button onClick={() => handleOpenModal(item)}>
                          share file
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className={styles.filesInfo__tableBodyCellOne}>
                <td colSpan='3' className={styles.filesInfo__infoRow}>
                  No Data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default FilesInfo;

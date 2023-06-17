import styles from './filesInfoStyles.module.scss';

const FilesInfo = (props) => {
  const addr = window.location.href.split('/');
  const title = addr[addr.length - 1];

  return (
    <section className={styles.filesInfo}>
      <div className={styles.filesInfo__titleContainer}>
        <h1>{`${title === 'dashboard' ? 'All' : title} Files`}</h1>
      </div>

      <table className={styles.filesInfo__table}>
        <thead>
          <tr>
            <th className={styles.filesInfo__tableHeaderCellOne}>File Name</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {props.data ? (
            <tr className={styles.filesInfo__tableBodyCellOne}>
              <td>My photo</td>
              <td>3mb</td>
              <td>delete</td>
            </tr>
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
  );
};

export default FilesInfo;

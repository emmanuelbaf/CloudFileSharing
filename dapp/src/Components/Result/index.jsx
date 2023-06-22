import SuccessSvg from '../SuccessSvg';
import styles from './resultStyles.module.scss';

const Result = (props) => {
  const handleClick = (e) => {
    e.stopPropagation(), props.onClick();
  };

  return (
    <div
      className={`${styles.result} ${styles[props.color]} ${
        styles[props.errorMessage]
      } ${props.color === 'green' ? styles.increaseWidth : ''}`}
      onClick={(e) => handleClick(e)}
    >
      {props.color === 'green' && (
        <div className={styles.result__successContainer}>
          <SuccessSvg />
        </div>
      )}
      <h4 className={props.color === 'green' ? styles.result__moveText : ''}>
        {props.text}
      </h4>
      {props.errorMessage && (
        <div>
          <p className={styles.result__text}>
            If you did not decline to proceed to this action, there might be
            several reasons for this error;
          </p>
          <ul>
            <li className={styles.result__list}>
              The recipient&apos;s address might be incorrect.
            </li>
            <li className={styles.result__list}>
              You might have previously shared this particular file with the
              recipient.
            </li>
            <li className={styles.result__list}>
              Your wallet balance might be too low to proceed with this action.
            </li>
            <li className={styles.result__list}>
              Check your network connection.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Result;

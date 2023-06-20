import SuccessSvg from '../SuccessSvg';
import styles from './resultStyles.module.scss';

const Result = (props) => {
  const handleClick = (e) => {
    e.stopPropagation(), props.onClick();
  };

  return (
    <div
      className={`${styles.result} ${styles[props.color]} ${
        props.color === 'green' && styles.increaseWidth
      }`}
      onClick={(e) => handleClick(e)}
    >
      {props.color === 'green' && (
        <div className={styles.result__successContainer}>
          <SuccessSvg />
        </div>
      )}
      <h4 className={props.color === 'green' && styles.result__moveText}>
        {props.text}
      </h4>
    </div>
  );
};

export default Result;

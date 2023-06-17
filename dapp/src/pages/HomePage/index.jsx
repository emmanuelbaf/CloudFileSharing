import styles from './homePageStyles.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1>
        <span> Share Always And Forever.</span>
        <span className={styles.home__startText}>
          click the get started button to start
        </span>
      </h1>
    </div>
  );
};

export default HomePage;

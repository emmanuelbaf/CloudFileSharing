import styles from './searchInputStyles.module.scss';
import { SEARCH } from '../../../assets/svgImages/';

const SearchInput = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type='search'
        name=''
        id=''
        placeholder='search'
        className={styles.searchContainer__input}
      />
      <div className={styles.searchContainer__searchIcon}>
        <img src={SEARCH} alt='search icon' />
      </div>
    </div>
  );
};

export default SearchInput;

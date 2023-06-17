import styles from './sideBarStyles.module.scss';
import { useDisconnect } from '@thirdweb-dev/react';
import { NavLink } from 'react-router-dom';
import { ALL, LOGOUT, MUSIC, PICTURE, VIDEO } from '../../assets/svgImages';

const Sidebar = () => {
  const disconnect = useDisconnect();

  return (
    <div className={styles.sideBar}>
      <ul className={styles.sideBar__linksContainer}>
        <NavLink to='/dashboard' className={styles.sideBar__link}>
          <li className={styles.sideBar__linkItem}>
            <span className={styles.sideBar__IconContainer}>
              <img src={ALL} alt='all icon' />
            </span>
            <span className={styles.sideBar__linkText}>All</span>
          </li>
        </NavLink>
        <NavLink to='video' className={styles.sideBar__link}>
          <li className={styles.sideBar__linkItem}>
            <span className={styles.sideBar__IconContainer}>
              {' '}
              <img src={VIDEO} alt='video icon' />
            </span>
            <span className={styles.sideBar__linkText}>Video</span>
          </li>
        </NavLink>
        <NavLink to='music' className={styles.sideBar__link}>
          <li className={styles.sideBar__linkItem}>
            <span className={styles.sideBar__IconContainer}>
              <img src={MUSIC} alt='music icon' />
            </span>
            <span className={styles.sideBar__linkText}>Music</span>
          </li>
        </NavLink>
        <NavLink to='picture' className={styles.sideBar__link}>
          <li className={styles.sideBar__linkItem}>
            <span className={styles.sideBar__IconContainer}>
              <img src={PICTURE} alt='picture icon' />
            </span>
            <span className={styles.sideBar__linkText}>Pictures</span>
          </li>
        </NavLink>
      </ul>

      <div className={styles.sideBar__foot} onClick={disconnect}>
        <span className={styles.sideBar__footText}>Log Out</span>
        <span className={styles.sideBar__footImg}>
          <img src={LOGOUT} alt='log out' />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import styles from './navStyles.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { CUBE } from '../../assets/svgImages';

const Nav = () => {
  const address = useAddress();
  const navigate = useNavigate();

  const handleNavigate = () => {
    address && navigate('dashboard');
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__navLogoContainer}>
        <div className={styles.header__logoContainer}>
          <div className={styles.header__logoIconContainer}>
            <img src={CUBE} alt='cube Icon' />
          </div>
          <div className={styles.header__logoTextContainer}>Forever</div>
        </div>
        <nav className={styles.header__nav}>
          <ul className={styles.header__linksContainer}>
            <NavLink to='dashboard' className={styles.header__link}>
              <li>Dashboard</li>
            </NavLink>
            <NavLink to='dashboard' className={styles.header__link}>
              <li>Admin</li>
            </NavLink>
            <li onClick={handleNavigate}>
              <ConnectWallet
                colorMode='light'
                btnTitle='Get Started'
                modalTitle='Connect Wallet'
                dropdownPosition={{
                  side: 'right', // "top" | "bottom" | "left" | "right";
                  align: 'end', // "start" | "center" | "end";
                }}
                className={styles.header__connectButton}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

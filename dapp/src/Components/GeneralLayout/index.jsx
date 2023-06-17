import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './generalLayoutStyles.module.scss';
import Nav from '../Nav';

const GeneralLayout = () => {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default GeneralLayout;

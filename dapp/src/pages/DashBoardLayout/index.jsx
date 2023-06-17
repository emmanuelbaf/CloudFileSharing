import React from 'react';
import styles from './dashBoardStyles.module.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/SideBar';
import File from '../../Components/File';

const DashBoardLayout = () => {
  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.dashboardContainer__aside}>
        <Sidebar />
      </aside>
      <section className={styles.dashboardContainer__section}>
        <File />
        <Outlet />
      </section>
    </div>
  );
};

export default DashBoardLayout;

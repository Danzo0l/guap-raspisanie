import React, { useContext } from 'react';

import {
  SidebarContext,
  ContextSidebar,
  PeriodContext,
  ContextPeriod,
} from '../../App';
import { Filter } from '../Filter';

import styles from './Sidebar.module.scss';

import logoLong from '../../img/logo-long.svg';
import low from '../../img/low.svg';
import up from '../../img/up.svg';

export const Sidebar = () => {
  const { sidebarActive } = useContext<ContextSidebar>(SidebarContext);
  const { period, setPeriod } = useContext<ContextPeriod>(PeriodContext);

  return (
    <aside
      className={
        sidebarActive ? styles.sidebar : styles.sidebar_active + ' ' + styles.sidebar
      }
    >
      <div className={styles.about}>
        <img src={logoLong} alt="" height={32} />
        <span>расписание</span>
      </div>
      <Filter />
      <div className={styles.togglePeriod}>
        <span>Выбрать неделю</span>
        <button onClick={() => setPeriod(!period)} className={styles.toggleBtn}>
          <img src={period ? low : up} alt="" />
        </button>
      </div>
    </aside>
  );
};
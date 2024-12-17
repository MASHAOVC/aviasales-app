import styles from './app.module.scss';

import Header from '../header';
import TransferFilterPanel from '../transfer-filter-panel';
import SortingPanel from '../sorting-panel';
import TicketsList from '../tickets-list';

import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  return (
    <section className={styles['app']}>
      <Header />
      <div className={styles['page-content-wrapper']}>
        <TransferFilterPanel />
        <div className={styles['page-right-wrapper']}>
          <SortingPanel />
          <TicketsList />
        </div>
      </div>
    </section>
  );
};

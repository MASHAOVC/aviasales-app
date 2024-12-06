import styles from './app.module.scss';

import Header from '../header';
import TransferFilterPanel from '../transfer-filter-panel';
import SortingPanel from '../sorting-panel';
import TicketsList from '../tickets-list';

export const App = () => {
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

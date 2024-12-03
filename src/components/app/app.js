import styles from './app.module.scss';

import Header from '../header';
import TransferFilterPanel from '../transfer-filter-panel';
import SortingPanel from '../sorting-panel';
import TicketsList from '../tickets-list';
import Footer from '../footer';

export const App = () => {
  return (
    <section className={styles.app}>
      <Header />
      <TransferFilterPanel />
      <SortingPanel />
      <TicketsList />
      <Footer />
    </section>
  );
};

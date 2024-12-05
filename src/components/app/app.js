import styles from './app.module.scss';

import Header from '../header';
import TransferFilterPanel from '../transfer-filter-panel';
import SortingPanel from '../sorting-panel';
import TicketsList from '../tickets-list';

import { ConfigProvider } from 'antd';

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          fontFamily: '"Open Sans", sans-serif',
          borderRadius: 5,

          // Alias Token
          colorBorder: '#DFE5EC',
        },
        components: {
          Radio: {
            buttonColor: '#4A4A4A',
            buttonCheckedBg: '#2196F3',
            buttonSolidCheckedHoverBg: '#FFFFFF',
          },
        },
      }}
    >
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
    </ConfigProvider>
  );
};

import styles from './tickets-list.module.scss';

import Ticket from '../ticket';
import TicketsListButton from '../tickets-list-button';

export const TicketsList = () => {
  return (
    <div className={styles['tickets-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <TicketsListButton />
    </div>
  );
};

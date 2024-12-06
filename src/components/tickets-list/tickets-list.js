import styles from './tickets-list.module.scss';

import Ticket from '../ticket';
import TicketsListButton from '../tickets-list-button';

export const TicketsList = () => {
  return (
    <div>
      <Ticket />
      <TicketsListButton />
    </div>
  );
};

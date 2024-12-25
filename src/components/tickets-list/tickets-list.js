import styles from './tickets-list.module.scss';
import { useSelector } from 'react-redux';

import Ticket from '../ticket';
import TicketsListButton from '../tickets-list-button';

export const TicketsList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);

  return (
    <div className={styles['tickets-list']}>
      {tickets.ticketPack.slice(0, 5).map((ticket) => {
        return <Ticket key={ticket.id} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />;
      })}
      <TicketsListButton />
    </div>
  );
};

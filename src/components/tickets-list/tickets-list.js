import styles from './tickets-list.module.scss';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import Ticket from '../ticket';
import TicketsListButton from '../tickets-list-button';

export const TicketsList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector((state) => state.tickets.tickets.loading);

  return (
    <div className={styles['tickets-list']}>
      {loading && <Spin />}
      {tickets.ticketPack.slice(0, 5).map((ticket) => {
        return <Ticket key={ticket.id} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />;
      })}
      <TicketsListButton />
    </div>
  );
};

import styles from './tickets-list.module.scss';
import { useSelector } from 'react-redux';
import { Spin, Alert } from 'antd';

import Ticket from '../ticket';
import TicketsListButton from '../tickets-list-button';

import { filterTiketsList } from './filtration';
import { sortTicketsList } from './sorting';

export const TicketsList = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector((state) => state.tickets.tickets.loading);
  const filter = useSelector((state) => state.filter);
  const sorting = useSelector((state) => state.sorting);
  console.log(filter, sorting);

  const filteredTicketsList = filterTiketsList(tickets, filter);
  const sortedTicketsList = sortTicketsList(filteredTicketsList, sorting.sorted);

  if (sortedTicketsList.length === 0) {
    return (
      <Alert
        message="Рейсов, подходящих под заданные фильтры, не найдено :("
        style={{ fontFamily: '"Open Sans", sans-serif', color: '#4A4A4A' }}
      />
    );
  }

  return (
    <div className={styles['tickets-list']}>
      {loading && <Spin />}
      {sortedTicketsList.slice(0, 5).map((ticket) => {
        return <Ticket key={ticket.id} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />;
      })}
      <TicketsListButton />
    </div>
  );
};

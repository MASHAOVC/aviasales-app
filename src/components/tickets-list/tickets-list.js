import styles from './tickets-list.module.scss';
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { Spin, Alert } from 'antd';

import Ticket from '../ticket';
import TicketsListButton from '../tickets-list-button';

import { filterTiketsList } from './filtration';
import { sortTicketsList } from './sorting';

export const TicketsList = () => {
  const [ticketsAmount, setticketsAmount] = useState(5); // It could have been in Redux,
  // but I decided to make it local
  // because it is only used in this component.

  const tickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector((state) => state.tickets.tickets.loading);
  const filter = useSelector((state) => state.filter);
  const sorting = useSelector((state) => state.sorting);

  const filteredTicketsList = useMemo(() => filterTiketsList(tickets, filter), [tickets, filter]);
  const sortedTicketsList = useMemo(
    () => sortTicketsList(filteredTicketsList, sorting.sorted),
    [filteredTicketsList, sorting]
  );

  if (sortedTicketsList.length === 0 && !loading) {
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
      {sortedTicketsList.slice(0, ticketsAmount).map((ticket) => {
        return <Ticket key={ticket.id} price={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />;
      })}
      {tickets.ticketPack.length > ticketsAmount && !loading && (
        <TicketsListButton setticketsAmount={setticketsAmount} />
      )}
    </div>
  );
};

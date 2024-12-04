import styles from './tickets-list.module.scss';

import Ticket from '../ticket';
import Footer from '../footer';

export const TicketsList = () => {
  return (
    <div>
      <Ticket />
      <Footer />
    </div>
  );
};

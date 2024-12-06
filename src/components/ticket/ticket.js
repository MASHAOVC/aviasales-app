import styles from './ticket.module.scss';
import logo from '../../assets/icons/S7_Logo.png';

import DirectionSegment from '../direction-segment';

export const Ticket = () => {
  return (
    <div className={styles['ticket']}>
      <header className={styles['header']}>
        <span className={styles['price']}>13 400</span>
        <img className={styles['carrier-logo']} src={logo} alt="carrier-logo" />
      </header>
      <div className={styles['direction-segments']}>
        <DirectionSegment />
        <DirectionSegment />
      </div>
    </div>
  );
};

{
  /* {segments.map((s) => <DirectionSegment {...s} />)} */
}

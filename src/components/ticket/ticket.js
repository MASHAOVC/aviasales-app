import styles from './ticket.module.scss';
import logo from '../../assets/icons/S7_Logo.png';

import DirectionSegment from '../direction-segment';

export const Ticket = (props) => {
  const { price, carrier, segments } = props;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className={styles['ticket']}>
      <header className={styles['header']}>
        <span className={styles['price']}>{formatPrice(price)} Р</span>
        <img className={styles['carrier-logo']} src={`//pics.avs.io/99/36/${carrier}.png`} alt="carrier-logo" />
      </header>
      <div className={styles['direction-segments']}>
        <DirectionSegment {...segments[0]} />
        <DirectionSegment {...segments[1]} />
      </div>
    </div>
  );
};

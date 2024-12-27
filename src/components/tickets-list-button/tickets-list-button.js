import styles from './tickets-list-button.module.scss';

export const TicketsListButton = ({ setticketsAmount }) => {
  return (
    <button
      className={styles['tickets-list-button']}
      onClick={() => {
        setticketsAmount((prevticketsAmount) => prevticketsAmount + 5);
      }}
    >
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
};

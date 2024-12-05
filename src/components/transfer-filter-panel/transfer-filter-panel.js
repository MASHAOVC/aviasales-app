import styles from './transfer-filter-panel.module.scss';

export const TransferFilterPanel = () => {
  return (
    <form className={styles['transfer-filter-panel']}>
      <h2 className={styles['heading']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <label className={styles['check']}>
        <input className={styles['check__input']} type="checkbox" />
        <span className={styles['check__box']}></span>
        Все
      </label>
      <label className={styles['check']}>
        <input className={styles['check__input']} type="checkbox" />
        <span className={styles['check__box']}></span>
        Без пересадок
      </label>
      <label className={styles['check']}>
        <input className={styles['check__input']} type="checkbox" />
        <span className={styles['check__box']}></span>1 пересадка
      </label>
      <label className={styles['check']}>
        <input className={styles['check__input']} type="checkbox" />
        <span className={styles['check__box']}></span>2 пересадки
      </label>
      <label className={styles['check']}>
        <input className={styles['check__input']} type="checkbox" />
        <span className={styles['check__box']}></span>3 пересадки
      </label>
    </form>
  );
};

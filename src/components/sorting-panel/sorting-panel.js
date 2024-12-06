import styles from './sorting-panel.module.scss';

export const SortingPanel = () => {
  return (
    <form className={styles['sorting-panel']}>
      <label className={styles['radio']}>
        <input className={styles['radio__input']} type="radio" name="sort-option" value="the cheapest" />
        <span className={styles['radio__button']}>САМЫЙ ДЕШЁВЫЙ</span>
      </label>
      <label className={styles['radio']}>
        <input className={styles['radio__input']} type="radio" name="sort-option" value="the fastest" />
        <span className={styles['radio__button']}>САМЫЙ БЫСТРЫЙ</span>
      </label>
      <label className={styles['radio']}>
        <input className={styles['radio__input']} type="radio" name="sort-option" value="optimal" />
        <span className={styles['radio__button']}>ОПТИМАЛЬНЫЙ</span>
      </label>
    </form>
  );
};

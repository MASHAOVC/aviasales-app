import styles from './direction-segment.module.scss';

export const DirectionSegment = () => {
  return (
    <div className={styles['direction-segment']}>
      <span className={styles['group']}>
        <h2 className={styles['heading']}>MOW – HKT</h2>
        <span className={styles['content']}>10:45 – 8:00</span>
      </span>
      <span className={styles['group']}>
        <h2 className={styles['heading']}>В ПУТИ</h2>
        <span className={styles['content']}>21ч 15м</span>
      </span>
      <span className={styles['group']}>
        <h2 className={styles['heading']}>2 ПЕРЕСАДКИ</h2>
        <span className={styles['content']}>HKG, JNB</span>
      </span>
    </div>
  );
};

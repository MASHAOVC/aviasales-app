import styles from './direction-segment.module.scss';

export const DirectionSegment = (props) => {
  const { origin, destination, date, duration, stops } = props;

  const formatDepartureTime = () => {
    const newDate = new Date(date);

    const hours = String(newDate.getHours()).padStart(2, '0');
    const minutes = String(newDate.getMinutes()).padStart(2, '0');

    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  };

  return (
    <div className={styles['direction-segment']}>
      <span className={styles['group']}>
        <h2 className={styles['heading']}>
          {origin} – {destination}
        </h2>
        <span className={styles['content']}>{formatDepartureTime()} – 8:00</span>
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

import styles from './direction-segment.module.scss';

export const DirectionSegment = (props) => {
  const { origin, destination, date, duration, stops } = props;

  const formatDepartureTime = () => {
    const departureDate = new Date(date);

    const hours = String(departureDate.getHours()).padStart(2, '0');
    const minutes = String(departureDate.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  const formatDurationTime = () => {
    const hours = String(Math.floor(duration / 60)).padStart(2, '0');
    const minutes = String(duration % 60).padStart(2, '0');

    return `${hours}ч ${minutes}м`;
  };

  const calculateArrivalTime = () => {
    const departureDate = new Date(date);

    departureDate.setMinutes(departureDate.getMinutes() + duration);

    const hours = String(departureDate.getHours()).padStart(2, '0');
    const minutes = String(departureDate.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  };

  //It is necessary to add logic for taking
  //into account time zones in accordance with
  //IATA codes in the formatting of departure
  //and arrival times.

  const getStops = () => {
    if (stops.length === 1) {
      return `${stops.length} ПЕРЕСАДКА`;
    } else if (stops.length >= 2 && stops.length <= 4) {
      return `${stops.length} ПЕРЕСАДКИ`;
    } else {
      return `${stops.length} ПЕРЕСАДОК`;
    }
  };

  return (
    <div className={styles['direction-segment']}>
      <span className={styles['group']}>
        <h2 className={styles['heading']}>
          {origin} – {destination}
        </h2>
        <span className={styles['content']}>
          {formatDepartureTime()} – {calculateArrivalTime()}
        </span>
      </span>
      <span className={styles['group']}>
        <h2 className={styles['heading']}>В ПУТИ</h2>
        <span className={styles['content']}>{formatDurationTime()}</span>
      </span>
      <span className={styles['group']}>
        <h2 className={styles['heading']}>{getStops()}</h2>
        <span className={styles['content']}>{stops.join(', ')}</span>
      </span>
    </div>
  );
};

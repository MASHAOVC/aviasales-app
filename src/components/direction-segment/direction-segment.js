import styles from './direction-segment.module.scss';

export const DirectionSegment = () => {
  return (
    <div>
      <div className={[styles['there'], styles['direction']].join(' ')}>
        <span>
          <h2></h2>
          <span></span>
        </span>
        <span>
          <h2></h2>
          <span></span>
        </span>
        <span>
          <h2></h2>
          <span></span>
        </span>
      </div>
      <div className={[styles['back'], styles['direction']].join(' ')}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

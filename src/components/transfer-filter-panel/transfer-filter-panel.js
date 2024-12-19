import styles from './transfer-filter-panel.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { toggleCheckbox, toggleAllCheckboxes } from '../../state/actions';

export const TransferFilterPanel = () => {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.filter);

  const handleCheckboxChange = (event) => {
    dispatch(toggleCheckbox(event.target.name));
  };

  const handleAllChange = (event) => {
    dispatch(toggleAllCheckboxes(event.target.checked));
  };

  return (
    <form className={styles['transfer-filter-panel']}>
      <h2 className={styles['heading']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <label className={styles['check']}>
        <input
          className={styles['check__input']}
          type="checkbox"
          name="all"
          onChange={handleAllChange}
          checked={checked.all}
        />
        <span className={styles['check__box']}></span>
        Все
      </label>
      <label className={styles['check']}>
        <input
          className={styles['check__input']}
          type="checkbox"
          name="nonStop"
          onChange={handleCheckboxChange}
          checked={checked.nonStop}
        />
        <span className={styles['check__box']}></span>
        Без пересадок
      </label>
      <label className={styles['check']}>
        <input
          className={styles['check__input']}
          type="checkbox"
          name="oneStop"
          onChange={handleCheckboxChange}
          checked={checked.oneStop}
        />
        <span className={styles['check__box']}></span>1 пересадка
      </label>
      <label className={styles['check']}>
        <input
          className={styles['check__input']}
          type="checkbox"
          name="twoStops"
          onChange={handleCheckboxChange}
          checked={checked.twoStops}
        />
        <span className={styles['check__box']}></span>2 пересадки
      </label>
      <label className={styles['check']}>
        <input
          className={styles['check__input']}
          type="checkbox"
          name="threeStops"
          onChange={handleCheckboxChange}
          checked={checked.threeStops}
        />
        <span className={styles['check__box']}></span>3 пересадки
      </label>
    </form>
  );
};

import styles from './sorting-panel.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setSortOption } from '../../state/actions';

export const SortingPanel = () => {
  const dispatch = useDispatch();
  const sorted = useSelector((state) => state.sorting.sorted);

  const handleSortChange = (event) => {
    dispatch(setSortOption(event.target.value));
  };

  return (
    <form className={styles['sorting-panel']}>
      <label className={styles['radio']}>
        <input
          className={styles['radio__input']}
          type="radio"
          name="sort-option"
          value="the cheapest"
          onChange={handleSortChange}
          checked={sorted === 'the cheapest'}
        />
        <span className={styles['radio__button']}>САМЫЙ ДЕШЁВЫЙ</span>
      </label>
      <label className={styles['radio']}>
        <input
          className={styles['radio__input']}
          type="radio"
          name="sort-option"
          value="the fastest"
          onChange={handleSortChange}
          checked={sorted === 'the fastest'}
        />
        <span className={styles['radio__button']}>САМЫЙ БЫСТРЫЙ</span>
      </label>
      <label className={styles['radio']}>
        <input
          className={styles['radio__input']}
          type="radio"
          name="sort-option"
          value="optimal"
          onChange={handleSortChange}
          checked={sorted === 'optimal'}
        />
        <span className={styles['radio__button']}>ОПТИМАЛЬНЫЙ</span>
      </label>
    </form>
  );
};

import styles from './header.module.scss';
import { ReactComponent as Logo } from '../../assets/icons/Logo.svg';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo className={styles.header__logo}></Logo>
    </div>
  );
};

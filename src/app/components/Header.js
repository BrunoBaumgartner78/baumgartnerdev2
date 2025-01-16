import Link from 'next/link';
import Slider from './Slider';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Slider />
    </header>
  );
};

export default Header;

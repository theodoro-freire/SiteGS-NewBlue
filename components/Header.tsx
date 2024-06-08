import Link from 'next/link';
import styles from '../styles/local.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>NewBlue</h1>
      </div>
      <div className={styles.right}>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Registrar</Link></li>
            <li><Link href="/ships">Navios</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

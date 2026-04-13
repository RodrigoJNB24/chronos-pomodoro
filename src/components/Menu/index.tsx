import { HouseIcon, SettingsIcon, HistoryIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import React, { useState } from 'react';

type AvailableTheme = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
      return nextTheme;
    });
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ver historico'
        title='Ver historico'
      >
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Configurções'
        title='Configurções'
      >
        <SettingsIcon />
      </a>
      <a
        href='https://www.google.com.br/'
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}

import styles from './styles.module.css';

type GernericsHtmlProps = {
  children: React.ReactNode;
}

export function GenericsHtml({ children }: GernericsHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
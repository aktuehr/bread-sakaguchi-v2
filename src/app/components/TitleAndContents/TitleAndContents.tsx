import styles from './TitleAndContents.module.css';

type TitleAndContentsProps = {
  title: string;
  children: React.ReactNode;
};

export function TitleAndContents({ title, children }: TitleAndContentsProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
} 
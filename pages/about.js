import styles from "styles/about.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>ようこそ　Tomicars　へ</h1>
      <p className={styles.text}>
        このWebアプリでは、ISSHINが持っているトミカの一覧を閲覧できます。
      </p>
      <p className={styles.text}>
        また、トミカをタップするとISSHINの声を聴くことができます。
      </p>
      <p className={styles.text}>お楽しみください。</p>
    </div>
  );
}

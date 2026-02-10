import styles from './Myheader.module.css';

const Myheader = () => (
  <div className={styles.Myheader}>
    <h1 className={styles.Name}>My home page</h1>
    <div className={styles.InformationBlock}>
      <a href=''>About me</a>
      <a href=''>My favourite films</a>
      <a href=''>Time</a>
      <a href=''>My pet</a>
    </div>
  </div>
);

export default Myheader;

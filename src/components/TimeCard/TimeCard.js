import styles from './TimeCard.module.css';
import { useState, useEffect } from 'react';

// const TimeCard = () => (
//   <div className={styles.TimeCard}>
//     TimeCard Component
//   </div>
// );

export function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return <div className={styles.Container}>
    <h1 className={styles.Time}>
      {hours}:{minutes}:{seconds}
    </h1>
  </div>
}



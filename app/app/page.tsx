import GenerateNum from '@/components/generateNum';
import { create } from './actions';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const arr = [5, 2, 5, 1, 3, 54, 9];

  let r = 1;
  arr.forEach((a) => {
    r *= a;
  });

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{r}</h1>
        <GenerateNum generate={create} />
    </div>
  )
}

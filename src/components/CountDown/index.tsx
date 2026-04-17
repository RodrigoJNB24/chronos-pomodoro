import styles from './styles.module.css';
import { useTaskContext } from '../../Contexts/TaskContext/useContextProvider';

export function CountDown() {
  const {state} = useTaskContext()
  return <div className={styles.container}>{state.formattedSecondsRemaining}</div>;
}

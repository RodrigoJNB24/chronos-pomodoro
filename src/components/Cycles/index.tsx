import { useTaskContext } from '../../Contexts/TaskContext/useContextProvider';
import { getNextCyle } from '../../utils/getNextCycle';
import { getNextCyleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescritionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };

  return (
    <div className={styles.cycles}>
      <span>Cycles</span>
      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCyle(index);
          const nextCycleType = getNextCyleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescritionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescritionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

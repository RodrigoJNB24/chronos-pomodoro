import { getNextCyleType } from '../../utils/getNextCycleType';
import { getNextCyle } from '../../utils/getNextCycle';
import { useTaskContext } from '../../Contexts/TaskContext/useContextProvider';

export function Tips() {
  const { state } = useTaskContext();
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Próximo descanso é de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>Próximo descaso será longo</span>,
  };

  const nextCycle = getNextCyle(state.currentCycle);
  const nextCyleType = getNextCyleType(nextCycle);

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}

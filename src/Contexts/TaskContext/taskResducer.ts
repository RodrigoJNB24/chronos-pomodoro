import { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCyle } from '../../utils/getNextCycle';
import { TaskActionModel, TaskActionTypes } from './taskAction';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;

      const nextCycle = getNextCyle(state.currentCycle);
      // const nextCycleType = getNextCyleType(nextCycle);

      const secondsRemaining = newTask.durationInMinutes * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(tasks => {
          if (state.activeTask && state.activeTask.id === tasks.id) {
            return { ...tasks, interruptDate: Date.now() };
          }
          return tasks;
        }),
      };
    }

    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }
  return state;
}

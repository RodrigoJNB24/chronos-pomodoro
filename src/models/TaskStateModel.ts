import { TaskModel } from './TaskModels';

export type TaskStateModel = {
  task: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    worTime: number;
    shortBreakTime: number;
    LongBreakTime: number;
  };
};

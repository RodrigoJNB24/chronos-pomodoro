import { TaskModel } from "../models/TaskModels";

export function getNextCyleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle === 8) return 'longBreakTime';

  return currentCycle % 2 !== 0 ? 'workTime' : 'shortBreakTime';
}
import './style/theme.css';
import './style/global.css';
import { Home } from './pages/Home';
import { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

const initialState: TaskStateModel = {
  task: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '05:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    LongBreakTime: 15
  } 
}

export function App() {
  const [state, setState] = useState(initialState);
  console.log('APP', state);
  return <Home/>;
}

import { Home } from './pages/Home';
import { TaskContextProvider } from './Contexts/TaskContext';

import './style/theme.css';
import './style/global.css';

export function App() {

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}

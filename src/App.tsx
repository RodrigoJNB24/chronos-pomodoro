import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

import './style/theme.css';
import './style/global.css';

export function App() {
  return (
    <>
      <Heading>
        Ola mundo 1
        <button>
          <TimerIcon/>
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
        temporibus sunt fugit autem illo, ad harum corporis eaque quod veritatis
        cum. Ab debitis culpa, et omnis minus fugit est. Dicta?
      </p>
    </>
  );
}

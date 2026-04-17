import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {

  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          labelText='task:'
          placeholder='Digite Algo'
        />
      </div>
      <div className='formRow'>
        <p>Proximo intervalo é de 25 min.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}

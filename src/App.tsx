import './style/theme.css';
import './style/global.css';

import { Heading } from './components/Heading';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}

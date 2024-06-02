import styled from 'styled-components';
import ReactLogo from './assets/react.svg?react';

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  return (
    <Root>
      <ReactLogo />
    </Root>
  );
};

export { App };

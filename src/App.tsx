import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';
import ReactLogo from './assets/react.svg?react';

const Root = styled.div`
  height: 100dvh;
  width: 100dvw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos'),
  });

  console.log(todos);

  return (
    <Root>
      <ReactLogo />
    </Root>
  );
};

export { App };

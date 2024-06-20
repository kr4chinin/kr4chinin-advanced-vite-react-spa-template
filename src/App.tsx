import styled from 'styled-components';
import { Content } from './components/Content';

const Root = styled.div`
	height: 100dvh;
	width: 100dvw;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const App = () => {
	return (
		<Root>
			<Content />
		</Root>
	);
};

export { App };

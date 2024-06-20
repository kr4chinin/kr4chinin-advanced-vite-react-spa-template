import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Root = styled.div`
	width: 60%;
	max-width: 800px;

	display: flex;
	flex-direction: column;
`;

const AuthorBlock = styled(Link)`
	display: flex;
	align-items: center;
	gap: 20px;

	text-decoration: none;
`;

const pulsing = keyframes`
  0% {
    box-shadow: 0 0 0 0px #64748b;
  }

  50% {
    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0);
  }

  100% {
    box-shadow: 0 0 0 12px rgba(0, 0, 0, 0);
  }
`;

const AuthorAvatar = styled.img`
	outline: 1px solid #94a3b8;

	width: 64px;
	height: 64px;

	border-radius: 16px;

	animation: ${pulsing} 1.5s ease-in-out infinite;
`;

const TemplateTitle = styled.h1`
	font-weight: 800;
	font-size: 2.25rem;
	line-height: 2.5rem;
	letter-spacing: -0.025em;
	color: var(--stone-900);
`;

const FadeDelimiter = styled.div`
	position: relative;
	width: 100%;
	height: 1px;
	background: linear-gradient(to right, transparent, var(--gray-900), transparent);
	margin: 20px 0;
`;

const Paragraph = styled.p`
	line-height: 1.75; /* or 1.75rem if using rem units */
	color: var(--stone-950);

	&:not(:first-child) {
		margin-top: 1.5rem;
	}
`;

const List = styled.ul`
	margin-top: 0.5;
	margin-left: 1.5rem;
	margin-bottom: 1.5rem;
	list-style-type: disc;
	color: var(--stone-950);

	& > li {
		margin-top: 0.5rem;
	}
`;

const ListsWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	margin-top: 1.5rem;
`;

const ListWrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

const Content = () => {
	return (
		<Root>
			<AuthorBlock to="https://github.com/kr4chinin/kr4chinin-advanced-vite-react-spa-template">
				<AuthorAvatar alt="Author avatar – https://github.com/kr4chinin" src="/kr4chinin.jpg" />

				<TemplateTitle>kr4chinin template</TemplateTitle>
			</AuthorBlock>

			<FadeDelimiter />

			<Paragraph>
				Pre-configured <strong>template</strong> for React SPA apps with the most popular libraries
				and tools. Perfect option to bootstrap your next project.
				<br />
				<br />
				Featuring:
			</Paragraph>

			<ListsWrapper>
				<ListWrapper>
					<Paragraph>
						<strong>Packages:</strong>
					</Paragraph>

					<List>
						<li>vite</li>
						<li>react-router-dom</li>
						<li>styled-components</li>
						<li>axios</li>
						<li>@tanstack/react-query</li>
						<li>react-error-boundary</li>
						<li>normalize.css</li>
					</List>
				</ListWrapper>

				<ListWrapper>
					<Paragraph>
						<strong>Tools:</strong>
					</Paragraph>

					<List>
						<li>eslint</li>
						<li>prettier</li>
						<li>husky</li>
						<li>lint-staged</li>
						<li>stylistic</li>
						<li>vite-plugin-eslint</li>
						<li>vite-plugin-svgr</li>
						<li>babel-plugin-styled-components</li>
						<li>and more...</li>
					</List>
				</ListWrapper>
			</ListsWrapper>
		</Root>
	);
};

export { Content };

import { Link, createBrowserRouter } from 'react-router-dom';
import { App } from '~/App';

export const createRouter = (): ReturnType<typeof createBrowserRouter> =>
	createBrowserRouter([
		{
			path: '/',
			element: <App />,
		},

		// Wildcard route – this route will match all URLs that are not defined
		{
			path: '*',
			element: (
				<div>
					4️⃣0️⃣4️⃣ Page not found! <Link to="/">Home</Link>
				</div>
			),
		},
	]);

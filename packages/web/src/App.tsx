import React from 'react';
import {Grid, GridColumn, GridRow} from 'semantic-ui-react';
import {BrowserRouter, Route as BrowserRoute, Switch} from 'react-router-dom';
import {MainMenu} from './components';
import {Routes} from './core/routes';
import {Error} from './pages';
import type {Route} from './types';
import {debug} from 'debug';

const d = debug('web.app');

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<MainMenu routes={Routes} />
				<Switch>
					{Routes.map((route: Route) => {
						return (
							<BrowserRoute exact path={route.path} key={route.path}>
								<Grid padded stackable stretched>
									<GridRow>
										<GridColumn>{route.page()}</GridColumn>
									</GridRow>
								</Grid>
							</BrowserRoute>
						);
					})}
					<BrowserRoute>
						<Grid padded stackable stretched>
							<GridRow>
								<GridColumn>
									<Error code="404" message="The page could not be found." />
								</GridColumn>
							</GridRow>
						</Grid>
					</BrowserRoute>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;

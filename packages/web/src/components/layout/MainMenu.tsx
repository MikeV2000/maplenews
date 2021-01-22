import {Menu} from 'semantic-ui-react';
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import type {Route, UserLocation} from '../../types';
import {server} from '../../core/endpoints';
import {Loading} from './Loading';

interface Props {
	routes: Route[];
}

export function MainMenu(props: Props) {
	const routePathName = useLocation().pathname;
	const {routes} = props;

	const [location, setLocation] = useState<UserLocation>();

	useEffect(() => {
		server('user-location', {})
			.then(response => {
				if (response.ok) {
					response.json().then(json => setLocation(json));
				}
			})
			.catch(error => error);
	}, [routePathName]);

	if (!location?.city || !location?.region_name) return <Loading />;

	return (
		<Menu inverted attached>
			{routes.map(route => {
				return (
					<Menu.Item key={route.path} color={route.color} name={route.path} active={routePathName === route.path}>
						<Link to={route.path}>{route.title}</Link>
					</Menu.Item>
				);
			})}
			<Menu.Item position="right">{`${location.city}, ${location.region_name}`}</Menu.Item>
		</Menu>
	);
}

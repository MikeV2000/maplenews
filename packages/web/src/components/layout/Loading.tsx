import React from 'react';
import {Container, Icon} from 'semantic-ui-react';

export function Loading() {
	return (
		<Container textAlign="center" style={{paddingTop: 50}}>
			<Icon loading name="spinner" size="big" color="grey" />
		</Container>
	);
}

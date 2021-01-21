import React from 'react';
import {Error404, Error500} from '../components';

interface Props {
	code: string;
	message: string;
}

export function Error(props: Props) {
	const {code, message} = props;

	switch (props.code) {
		case '404':
			return <Error404 code={code} message={message} />;
		default:
			return <Error500 code={code} message={message} />;
	}
}

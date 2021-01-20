import React from 'react';
import {Message} from 'semantic-ui-react';

interface Props {
	code: string;
	message: string;
}

export function Error500(props: Props) {
	const {code, message} = props;

	return <Message icon="error" header={code} content={message} color="red" />;
}

import fetch from 'node-fetch';
import type {Db} from 'mongodb';
import {debug} from 'debug';
import type {UserLocationType} from '../../types';
import {cache} from '../../core/cache';
import {UserIP} from '../../lib';
import {environment} from '../../core/environment';

const d = debug('server.UserLocation');

export async function UserLocation(req: unknown, data: Record<string, unknown>, db: Db): Promise<UserLocationType | undefined> {
	const ip = await UserIP(req);

	return cache(db, 10080, 'user-location', {ip}, async () => {
		const response = await fetch(`http://api.ipstack.com/${ip}?access_key=${environment.ipStackApiKey}&format=1`);
		return response.json();
	});
}

import type {Db} from 'mongodb';

export async function cache(
	db: Db,
	cachedTime: number,
	name: string,
	parameters: Record<string, unknown>,
	action: () => Promise<Record<string, unknown>>,
) {
	const collection = await db.collection(name);
	const currentDateTime = new Date();
	const result = (await (await collection.find(parameters).sort({timestamp: -1}).limit(1)).toArray())[0];

	if (result) {
		const timeDifference = (currentDateTime.getTime() - new Date(result.timestamp).getTime()) / 60000;

		if (timeDifference > cachedTime) {
			const actionResult = await action();
			await collection.insertOne({timestamp: currentDateTime, ...actionResult});
			return actionResult;
		}

		return result;
	}

	const actionResult = await action();
	await collection.insertOne({timestamp: currentDateTime, ...actionResult});
	return actionResult;
}

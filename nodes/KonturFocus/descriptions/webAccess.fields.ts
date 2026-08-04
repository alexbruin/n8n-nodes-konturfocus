import type { INodeProperties } from 'n8n-workflow';

export const webAccessFields: INodeProperties[] = [
	{
		displayName: "Взять записей",
		name: "take",
		type: 'number',
		default: 1,
		description: "Количество возвращаемых токенов в ответе",
		displayOptions: {
			show: {
				resource: ['webAccess'],
				operation: ["seamlessLoginToken"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "take",
				},
		},
	},
];

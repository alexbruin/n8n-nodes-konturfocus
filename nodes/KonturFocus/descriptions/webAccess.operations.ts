import type { INodeProperties } from 'n8n-workflow';

export const webAccessOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webAccess'],
			},
		},
		options: [
			{
				name: "Получение токена для входа",
				value: "seamlessLoginToken",
				description: "Получение токена для входа",
				action: "Получение токена для входа",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/seamlessLoginToken',
						},
					},
			},
		],
		default: "seamlessLoginToken",
	},
];

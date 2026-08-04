import type { INodeProperties } from 'n8n-workflow';

export const serviceOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['service'],
			},
		},
		options: [
			{
				name: "Статистика использования методов API",
				value: "stat",
				description: "Статистика использования методов API",
				action: "Статистика использования методов API",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/stat',
						},
					},
			},
		],
		default: "stat",
	},
];

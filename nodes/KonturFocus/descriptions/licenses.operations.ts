import type { INodeProperties } from 'n8n-workflow';

export const licensesOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['licenses'],
			},
		},
		options: [
			{
				name: "Информация о лицензиях",
				value: "licences",
				description: "Информация о лицензиях",
				action: "Информация о лицензиях",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/licences',
						},
					},
			},
			{
				name: "Лицензируемые виды деятельности",
				value: "licensedActivities",
				description: "Лицензируемые виды деятельности",
				action: "Лицензируемые виды деятельности",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/licensedActivities',
						},
					},
			},
			{
				name: "Сертификаты и декларации соответствия",
				value: "fsa",
				description: "Сертификаты и декларации соответствия",
				action: "Сертификаты и декларации соответствия",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/fsa',
						},
					},
			},
		],
		default: "licences",
	},
];

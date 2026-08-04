import type { INodeProperties } from 'n8n-workflow';

export const monitoringLegacyOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['monitoringLegacy'],
			},
		},
		options: [
			{
				name: "Новости наблюдения",
				value: "egrDetailsMon",
				description: "Новости наблюдения",
				action: "Новости наблюдения",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/egrDetails/mon',
						},
					},
			},
			{
				name: "Новости наблюдения",
				value: "reqMon",
				description: "Новости наблюдения",
				action: "Новости наблюдения",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/req/mon',
						},
					},
			},
			{
				name: "Получить список организаций",
				value: "monList",
				description: "Получить список организаций",
				action: "Получить список организаций",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/monList',
						},
					},
			},
			{
				name: "Указать список организаций",
				value: "monListPost",
				description: "Указать список организаций",
				action: "Указать список организаций",
				routing: {
						request: {
							method: 'POST',
							url: '/api3/monList',
						},
					},
			},
		],
		default: "egrDetailsMon",
	},
];

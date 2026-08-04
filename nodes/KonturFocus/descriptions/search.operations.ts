import type { INodeProperties } from 'n8n-workflow';

export const searchOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['search'],
			},
		},
		options: [
			{
				name: "Поиск новых компаний",
				value: "selectionByRegDate",
				description: "Поиск новых компаний",
				action: "Поиск новых компаний",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/selectionByRegDate',
						},
					},
			},
			{
				name: "Поисковая строка",
				value: "search",
				description: "Поисковая строка",
				action: "Поисковая строка",
				routing: {
						request: {
							method: 'GET',
							url: '/api2/search',
						},
					},
			},
			{
				name: "Поисковые подсказки",
				value: "suggest",
				description: "Поисковые подсказки",
				action: "Поисковые подсказки",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/suggest',
						},
					},
			},
		],
		default: "selectionByRegDate",
	},
];

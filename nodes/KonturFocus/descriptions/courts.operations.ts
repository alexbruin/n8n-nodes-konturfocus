import type { INodeProperties } from 'n8n-workflow';

export const courtsOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['courts'],
			},
		},
		options: [
			{
				name: "Исполнительные производства",
				value: "fssp",
				description: "Исполнительные производства",
				action: "Исполнительные производства",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/fssp',
						},
					},
			},
			{
				name: "Статистика по истцам в арбитраже",
				value: "petitionersOfArbitration",
				description: "Статистика по истцам в арбитраже",
				action: "Статистика по истцам в арбитраже",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/petitionersOfArbitration',
						},
					},
			},
			{
				name: "Суды общей юрисдикции",
				value: "generalCourtCases",
				description: "Суды общей юрисдикции",
				action: "Суды общей юрисдикции",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/generalCourtCases',
						},
					},
			},
		],
		default: "fssp",
	},
];

import type { INodeProperties } from 'n8n-workflow';

export const monitoringOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['monitoring'],
			},
		},
		options: [
			{
				name: "Добавление компаний в список",
				value: "monitoringListPost",
				description: "Добавление компаний в список",
				action: "Добавление компаний в список",
				routing: {
						request: {
							method: 'POST',
							url: '/api3/monitoringList',
						},
					},
			},
			{
				name: "Метод чтения изменений по всем компаниям ЕГРЮЛ/ЕГРИП",
				value: "monitoringGetAllChanges",
				description: "Метод чтения изменений по всем компаниям ЕГРЮЛ/ЕГРИП",
				action: "Метод чтения изменений по всем компаниям ЕГРЮЛ/ЕГРИП",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/monitoringGetAllChanges',
						},
					},
			},
			{
				name: "Метод чтения изменений по списку",
				value: "monitoringGetChanges",
				description: "Метод чтения изменений по списку",
				action: "Метод чтения изменений по списку",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/monitoringGetChanges',
						},
					},
			},
			{
				name: "Метод чтения полных состояний по всем компаниям ЕГРЮЛ/ЕГРИП",
				value: "monitoringGetAllStates",
				description: "Метод чтения полных состояний по всем компаниям ЕГРЮЛ/ЕГРИП",
				action: "Метод чтения полных состояний по всем компаниям ЕГРЮЛ/ЕГРИП",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/monitoringGetAllStates',
						},
					},
			},
			{
				name: "Метод чтения полных состояний по списку",
				value: "monitoringGetStates",
				description: "Метод чтения полных состояний по списку",
				action: "Метод чтения полных состояний по списку",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/monitoringGetStates',
						},
					},
			},
			{
				name: "Просмотр списка",
				value: "monitoringList",
				description: "Просмотр списка",
				action: "Просмотр списка",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/monitoringList',
						},
					},
			},
			{
				name: "Удаление компаний из списка",
				value: "monitoringListDelete",
				description: "Удаление компаний из списка",
				action: "Удаление компаний из списка",
				routing: {
						request: {
							method: 'DELETE',
							url: '/api3/monitoringList',
						},
					},
			},
		],
		default: "monitoringListPost",
	},
];

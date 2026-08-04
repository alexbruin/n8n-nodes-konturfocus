import type { INodeProperties } from 'n8n-workflow';

export const chinaCompaniesOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['chinaCompanies'],
			},
		},
		options: [
			{
				name: "Метод получения статуса задачи и данных по компании из КНР",
				value: "chinaCompanyGetStatus",
				description: "Метод получения статуса задачи и данных по компании из КНР",
				action: "Метод получения статуса задачи и данных по компании из КНР",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/cnCompanyGetStatus',
						},
					},
			},
			{
				name: "Отправка запроса на проверку компании из КНР",
				value: "chinaCompanySendToCheck",
				description: "Отправка запроса на проверку компании из КНР",
				action: "Отправка запроса на проверку компании из КНР",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/cnCompanySendToCheck',
						},
					},
			},
		],
		default: "chinaCompanyGetStatus",
	},
];

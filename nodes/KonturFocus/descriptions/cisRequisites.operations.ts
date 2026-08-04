import type { INodeProperties } from 'n8n-workflow';

export const cisRequisitesOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cisRequisites'],
			},
		},
		options: [
			{
				name: "Данные по компаниям Беларуси",
				value: "byCompanyDetails",
				description: "Данные по компаниям Беларуси",
				action: "Данные по компаниям Беларуси",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/by/companyDetails',
						},
					},
			},
			{
				name: "Данные по компаниям Казахстана",
				value: "kzCompanyDetails",
				description: "Данные по компаниям Казахстана",
				action: "Данные по компаниям Казахстана",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/kz/companyDetails',
						},
					},
			},
		],
		default: "byCompanyDetails",
	},
];

import type { INodeProperties } from 'n8n-workflow';

export const bankruptcyLegalOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bankruptcyLegal'],
			},
		},
		options: [
			{
				name: "Информация о банкротстве ЮЛ",
				value: "companyBankruptcy",
				description: "Информация о банкротстве ЮЛ",
				action: "Информация о банкротстве ЮЛ",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/companyBankruptcy',
						},
					},
			},
			{
				name: "Мораторий на банкротство в связи с COVID-19",
				value: "moratoriumOnBankruptcyCovid19",
				description: "Мораторий на банкротство в связи с COVID-19",
				action: "Мораторий на банкротство в связи с COVID-19",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/moratoriumOnBankruptcyCovid19',
						},
					},
			},
			{
				name: "Намерения подать заявление о признании должника несостоятельным (банкротом)",
				value: "companyBankruptcyIntentions",
				description: "Намерения подать заявление о признании должника несостоятельным (банкротом)",
				action: "Намерения подать заявление о признании должника несостоятельным (банкротом)",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/companyBankruptcyIntentions',
						},
					},
			},
		],
		default: "companyBankruptcy",
	},
];

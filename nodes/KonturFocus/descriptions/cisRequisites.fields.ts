import type { INodeProperties } from 'n8n-workflow';

export const cisRequisitesFields: INodeProperties[] = [
	{
		displayName: "УНП организации (Беларусь)",
		name: "unp",
		type: 'string',
		default: '',
		description: "УНП организации. Максимально можно указать 100 УНП через запятую. Обязательный параметр.",
		displayOptions: {
			show: {
				resource: ['cisRequisites'],
				operation: ["byCompanyDetails"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "unp",
				},
		},
	},
	{
		displayName: "Формат XML",
		name: "xml",
		type: 'boolean',
		default: false,
		description: "При значении true возвращает ответ в формате xml. Значение по умолчанию: false",
		displayOptions: {
			show: {
				resource: ['cisRequisites'],
				operation: ["byCompanyDetails", "kzCompanyDetails"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "xml",
					value: '={{$value}}',
				},
		},
	},
	{
		displayName: "БИН организации",
		name: "bin",
		type: 'string',
		default: '',
		description: "БИН организации. Можно указать до 100 штук через запятую. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['cisRequisites'],
				operation: ["kzCompanyDetails"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "bin",
				},
		},
	},
];

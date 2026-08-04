import type { INodeProperties } from 'n8n-workflow';

export const chinaCompaniesFields: INodeProperties[] = [
	{
		displayName: "ID задачи",
		name: "taskId",
		type: 'string',
		default: '',
		description: "Идентификатор задачи. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['chinaCompanies'],
				operation: ["chinaCompanyGetStatus"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "taskId",
				},
		},
	},
	{
		displayName: "Формат XML",
		name: "xml",
		type: 'boolean',
		default: false,
		description: "При значении true возвращает ответ в формате xml. Значение по умолчанию: false.",
		displayOptions: {
			show: {
				resource: ['chinaCompanies'],
				operation: ["chinaCompanyGetStatus", "chinaCompanySendToCheck"],
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
		displayName: "Единый код (КНР)",
		name: "uscc",
		type: 'string',
		default: '',
		description: "USCC (Unified Social Credit Code) Китайской компании. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['chinaCompanies'],
				operation: ["chinaCompanySendToCheck"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "uscc",
				},
		},
	},
];

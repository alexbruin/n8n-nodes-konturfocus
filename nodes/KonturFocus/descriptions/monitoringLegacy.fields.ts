import type { INodeProperties } from 'n8n-workflow';

export const monitoringLegacyFields: INodeProperties[] = [
	{
		displayName: "Дата",
		name: "date",
		type: 'string',
		default: '',
		description: "Дата в формате ГГГГ-ММ-ДД",
		displayOptions: {
			show: {
				resource: ['monitoringLegacy'],
				operation: ["egrDetailsMon"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "date",
				},
		},
	},
	{
		displayName: "Дата",
		name: "date",
		type: 'string',
		default: '',
		description: "Дата в формате ГГГГ-ММ-ДД. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['monitoringLegacy'],
				operation: ["reqMon"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "date",
				},
		},
	},
	{
		displayName: "Дополнить список",
		name: "append",
		type: 'boolean',
		default: false,
		description: "Добавить организации в список наблюдения или перезаписать. True — дополнить содержимое списка, false — перезаписать список. Если параметр не указан, то по умолчанию будет false",
		displayOptions: {
			show: {
				resource: ['monitoringLegacy'],
				operation: ["monListPost"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "append",
					value: '={{$value}}',
				},
		},
	},
	{
		displayName: "ID клиента",
		name: "clientId",
		type: 'string',
		default: "Undefined",
		description: "",
		displayOptions: {
			show: {
				resource: ['monitoringLegacy'],
				operation: ["monListPost"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "clientId",
				},
		},
	},
	{
		displayName: "Источник",
		name: "source",
		type: 'string',
		default: "Undefined",
		description: "",
		displayOptions: {
			show: {
				resource: ['monitoringLegacy'],
				operation: ["monListPost"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "source",
				},
		},
	},
];

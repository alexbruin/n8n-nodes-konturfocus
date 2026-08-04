import type { INodeProperties } from 'n8n-workflow';

export const licensesFields: INodeProperties[] = [
	{
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Можно указать максимум 100 ОГРН через запятую. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['licenses'],
				operation: ["licences", "licensedActivities"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "ogrn",
				},
		},
	},
	{
		displayName: "ИНН",
		name: "inn",
		type: 'string',
		default: '',
		description: "ИНН организации. Можно указать максимум 100 ИНН через запятую. Обязательный параметр, если не указан ОГРН",
		displayOptions: {
			show: {
				resource: ['licenses'],
				operation: ["licences", "licensedActivities"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "inn",
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
				resource: ['licenses'],
				operation: ["licences", "licensedActivities", "fsa"],
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
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Максимально можно указать 100 ОГРН через запятую. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['licenses'],
				operation: ["fsa"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "ogrn",
				},
		},
	},
	{
		displayName: "ИНН",
		name: "inn",
		type: 'string',
		default: '',
		description: "ИНН организации. Максимально можно указать 100 ИНН через запятую. Обязательный параметр, если не указан ОГРН",
		displayOptions: {
			show: {
				resource: ['licenses'],
				operation: ["fsa"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "inn",
				},
		},
	},
	{
		displayName: "Пропустить записей",
		name: "skip",
		type: 'number',
		default: 0,
		description: "Количество записей по сертификатам и декларациям, которые нужно пропустить от начала списка. Для получения первой 1000 сертификатов и деклараций параметр можно не указывать. Для получения второй 1000 необходимо указать skip=1000 и так далее",
		displayOptions: {
			show: {
				resource: ['licenses'],
				operation: ["fsa"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "skip",
				},
		},
	},
];

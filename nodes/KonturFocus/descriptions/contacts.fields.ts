import type { INodeProperties } from 'n8n-workflow';

export const contactsFields: INodeProperties[] = [
	{
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Максимально можно указать 100 ОГРН через запятую. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['contacts'],
				operation: ["sites", "contactEmails", "contacts", "trademarks"],
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
				resource: ['contacts'],
				operation: ["sites", "contactEmails", "contacts", "trademarks"],
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
				resource: ['contacts'],
				operation: ["sites", "contactEmails", "contacts", "trademarks"],
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
		displayName: "Пропустить записей",
		name: "skip",
		type: 'number',
		default: 0,
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой сотни результатов параметр можно не указывать. Для получения второй сотни необходимо указать skip=100 и так далее",
		displayOptions: {
			show: {
				resource: ['contacts'],
				operation: ["trademarks"],
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

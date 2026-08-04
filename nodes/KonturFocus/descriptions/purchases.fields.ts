import type { INodeProperties } from 'n8n-workflow';

export const purchasesFields: INodeProperties[] = [
	{
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['purchases'],
				operation: ["bankGuarantees", "govPurchasesOfCustomer", "govPurchasesOfParticipant", "allPurchasesOfCustomer", "allPurchasesOfParticipant"],
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
		description: "ИНН организации. Обязательный параметр, если не указан ОГРН",
		displayOptions: {
			show: {
				resource: ['purchases'],
				operation: ["bankGuarantees", "govPurchasesOfCustomer", "govPurchasesOfParticipant", "allPurchasesOfCustomer", "allPurchasesOfParticipant"],
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
				resource: ['purchases'],
				operation: ["bankGuarantees", "govPurchasesOfCustomer", "govPurchasesOfParticipant", "allPurchasesOfCustomer", "allPurchasesOfParticipant"],
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
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой 1000 записей параметр можно не указывать. Для получения второй 1000 необходимо указать skip=1000 и так далее",
		displayOptions: {
			show: {
				resource: ['purchases'],
				operation: ["bankGuarantees"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "skip",
				},
		},
	},
	{
		displayName: "Пропустить записей",
		name: "skip",
		type: 'number',
		default: 0,
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой тысячи закупок параметр можно не указывать. Для получения второй тысячи необходимо указать skip=1000 и так далее",
		displayOptions: {
			show: {
				resource: ['purchases'],
				operation: ["govPurchasesOfCustomer", "govPurchasesOfParticipant"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "skip",
				},
		},
	},
	{
		displayName: "Пропустить записей",
		name: "skip",
		type: 'number',
		default: 0,
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой 100 записей параметр можно не указывать. Для получения второй 100 необходимо указать skip=100 и так далее",
		displayOptions: {
			show: {
				resource: ['purchases'],
				operation: ["allPurchasesOfCustomer", "allPurchasesOfParticipant"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "skip",
				},
		},
	},
	{
		displayName: "Взять записей",
		name: "take",
		type: 'number',
		default: 1,
		description: "Количество записей, которых нужно вернуть в ответе. Для получения первой 100 записей параметр можно не указывать. Для получения второй 100 необходимо указать take=100 и так далее",
		displayOptions: {
			show: {
				resource: ['purchases'],
				operation: ["allPurchasesOfCustomer", "allPurchasesOfParticipant"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "take",
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
				resource: ['purchases'],
				operation: ["rnp"],
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
				resource: ['purchases'],
				operation: ["rnp"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "inn",
				},
		},
	},
];

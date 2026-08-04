import type { INodeProperties } from 'n8n-workflow';

export const analyticsFields: INodeProperties[] = [
	{
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Можно указать максимум 100 ОГРН через запятую. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ["analyticLists", "linkAnalytics", "bankruptcyAnalytics", "analytics", "scoring", "legalAnalytics"],
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
				resource: ['analytics'],
				operation: ["analyticLists", "linkAnalytics", "bankruptcyAnalytics", "analytics", "scoring", "legalAnalytics"],
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
				resource: ['analytics'],
				operation: ["analyticLists", "inspections", "unifiedInspections", "analytics", "scoring"],
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
				resource: ['analytics'],
				operation: ["courtAnalytics", "fsspAnalytics", "purchasesAnalytics", "financeAnalytics", "briefReport"],
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
				resource: ['analytics'],
				operation: ["courtAnalytics", "fsspAnalytics", "purchasesAnalytics", "financeAnalytics", "briefReport"],
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
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ["inspections", "unifiedInspections", "enterpriseSupport"],
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
				resource: ['analytics'],
				operation: ["inspections", "unifiedInspections", "enterpriseSupport"],
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
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой сотни проверок параметр можно не указывать. Для получения второй сотни необходимо указать skip=100 и так далее",
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ["inspections", "unifiedInspections"],
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
		default: 100,
		description: "Количество записей, которых нужно вернуть в ответе. Для получения первой 100 записей параметр можно не указывать. Для получения второй 100 необходимо указать take=100 и так далее",
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ["inspections", "unifiedInspections"],
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
		displayName: "Формат XML",
		name: "xml",
		type: 'boolean',
		default: false,
		description: "true – получить данные в XML формате. По умолчанию = false",
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ["enterpriseSupport"],
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
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой сотни записей параметр можно не указывать. Для получения второй сотни необходимо указать skip=100 и так далее",
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ["enterpriseSupport"],
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
		default: 100,
		description: "Количество записей, которых нужно вернуть в ответе. Если не указать параметр, то по умолчанию вернется 100 записей",
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ["enterpriseSupport"],
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
		displayName: "Формат XML",
		name: "xml",
		type: 'boolean',
		default: false,
		description: "Экспресс-отчет в формате XML. При значении true возвращает ответ в формате xml. Значение по умолчанию: false",
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ["briefReport"],
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
		displayName: "Формат PDF",
		name: "pdf",
		type: 'string',
		default: '',
		description: "Экспресс-отчет в формате PDF. При значении true возвращает ответ в формате pdf. Значение по умолчанию: false",
		displayOptions: {
			show: {
				resource: ['analytics'],
				operation: ["briefReport"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "pdf",
				},
		},
	},
];

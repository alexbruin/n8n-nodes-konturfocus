import type { INodeProperties } from 'n8n-workflow';

export const affiliationsFields: INodeProperties[] = [
	{
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['affiliations'],
				operation: ["companyAffiliatesAnalytics", "companyAffiliationsTypes", "foundersHistory", "beneficialOwners", "companyAffiliatesEgrDetails", "companyAffiliatesReq"],
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
				resource: ['affiliations'],
				operation: ["companyAffiliatesAnalytics", "companyAffiliationsTypes", "foundersHistory", "beneficialOwners", "companyAffiliatesEgrDetails", "companyAffiliatesReq"],
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
		displayName: "Тип связи",
		name: "affiliationType",
		type: 'string',
		default: "0",
		description: "Тип связи. Актуальная связь - actual, историческая связь - historical, все связи - all. По умолчанию возвращаются все связи",
		displayOptions: {
			show: {
				resource: ['affiliations'],
				operation: ["companyAffiliatesAnalytics", "personAffiliatesAnalytics", "companyAffiliatesEgrDetails", "personAffiliatesEgrDetails", "companyAffiliatesReq", "personAffiliatesReq"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "affiliationType",
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
				resource: ['affiliations'],
				operation: ["companyAffiliatesAnalytics", "personAffiliatesAnalytics", "companyAffiliationsTypes", "foundersHistory", "beneficialOwners", "companyAffiliatesEgrDetails", "personAffiliatesEgrDetails", "companyAffiliatesReq", "personAffiliatesReq"],
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
		displayName: "ИНН ФЛ",
		name: "innfl",
		type: 'string',
		default: '',
		description: "ИНН физического лица. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['affiliations'],
				operation: ["personAffiliatesAnalytics", "personAffiliatesEgrDetails", "personAffiliatesReq"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "innfl",
				},
		},
	},
	{
		displayName: "Пропустить записей",
		name: "skip",
		type: 'number',
		default: 0,
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первых 100 записей параметр можно не указывать. Для получения второй 100 необходимо указать skip=100 и так далее",
		displayOptions: {
			show: {
				resource: ['affiliations'],
				operation: ["companyAffiliationsTypes"],
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
				resource: ['affiliations'],
				operation: ["companyAffiliationsTypes"],
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
		displayName: "Тип связи",
		name: "affiliationType",
		type: 'string',
		default: "0",
		description: "Тип связи. По умолчанию возвращаются только актуальные связи (Actual). Чтобы получить все связи — и актуальные, и исторические — укажите параметр All",
		displayOptions: {
			show: {
				resource: ['affiliations'],
				operation: ["companyAffiliationsTypes"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "affiliationType",
				},
		},
	},
];

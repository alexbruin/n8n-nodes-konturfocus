import type { INodeProperties } from 'n8n-workflow';

export const listsFields: INodeProperties[] = [
	{
		displayName: "ID списка",
		name: "listid",
		type: 'string',
		default: '',
		description: "Id списка, в который нужно внести изменения. Id можно получить методом lists",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["listsImport"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "listid",
				},
		},
	},
	{
		displayName: "Организации",
		name: "orgs",
		type: 'string',
		default: '',
		description: "Список организаций",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["listsImport"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "orgs",
				},
		},
	},
	{
		displayName: "Дополнить список",
		name: "append",
		type: 'boolean',
		default: false,
		description: "При значении true, список будет дополнен указанными ИНН, а не перезаписан",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["listsImport"],
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
		displayName: "Как юрлица",
		name: "asOrganizations",
		type: 'boolean',
		default: false,
		description: "При значении true, ИНН будут добавлены в список как юрлица",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["listsImport"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "asOrganizations",
					value: '={{$value}}',
				},
		},
	},
	{
		displayName: "Как физлица",
		name: "asPersons",
		type: 'boolean',
		default: false,
		description: "При значении true, ИНН будут добавлены в список как физлица",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["listsImport"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "asPersons",
					value: '={{$value}}',
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
				resource: ['lists'],
				operation: ["lists", "listsMatches", "personAffiliatesListsMatches", "companyAffiliatesListsMatches"],
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
		description: "ОГРН организации. Можно указать max=100 ОГРН через запятую. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["listsMatches"],
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
		description: "ИНН организации. Можно указать max=100 ИНН через запятую. Обязательный параметр, если не указан ОГРН",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["listsMatches"],
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
		displayName: "ИНН ФЛ",
		name: "innfl",
		type: 'string',
		default: '',
		description: "ИНН физического лица",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["personAffiliatesListsMatches"],
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
		displayName: "Тип связи",
		name: "affiliationType",
		type: 'string',
		default: "0",
		description: "",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["personAffiliatesListsMatches", "companyAffiliatesListsMatches"],
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
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['lists'],
				operation: ["companyAffiliatesListsMatches"],
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
				resource: ['lists'],
				operation: ["companyAffiliatesListsMatches"],
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

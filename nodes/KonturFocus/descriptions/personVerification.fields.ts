import type { INodeProperties } from 'n8n-workflow';

export const personVerificationFields: INodeProperties[] = [
	{
		displayName: "Поисковый запрос",
		name: "q",
		type: 'string',
		default: '',
		description: "Поисковая строка",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["fizBankr"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "q",
				},
		},
	},
	{
		displayName: "Дата",
		name: "date",
		type: 'string',
		default: '',
		description: "Дата публикации",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["fizBankr"],
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
		displayName: "ФИО",
		name: "fio",
		type: 'string',
		default: '',
		description: "ФИО. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["sanctionedPersons"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "fio",
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
				resource: ['personVerification'],
				operation: ["sanctionedPersons", "personBankruptcy", "pepSearch", "allPeps", "checkPassport", "smzGetStatus", "smzSendToCheck"],
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
		description: "ИННФЛ. Можно указать либо ИННФЛ, либо ФИО с/без даты рождения",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["personBankruptcy"],
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
		displayName: "ФИО",
		name: "fio",
		type: 'string',
		default: '',
		description: "ФИО. Можно указать либо ИННФЛ, либо ФИО с/без даты рождения",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["personBankruptcy"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "fio",
				},
		},
	},
	{
		displayName: "Дата рождения",
		name: "birthDate",
		type: 'string',
		default: '',
		description: "Дата рождения в формате гггг-мм-дд или гггг",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["personBankruptcy"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "birthDate",
				},
		},
	},
	{
		displayName: "ФИО",
		name: "fio",
		type: 'string',
		default: '',
		description: "ФИО человека. Можно указать ФИО полностью, либо только фамилию. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["pepSearch"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "fio",
				},
		},
	},
	{
		displayName: "Серия и номер паспорта",
		name: "passportNumber",
		type: 'string',
		default: '',
		description: "Серия и номер паспорта. Нет возможности делать несколько запросов в одной строке",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["checkPassport"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "passportNumber",
				},
		},
	},
	{
		displayName: "GUID задачи",
		name: "guid",
		type: 'string',
		default: '',
		description: "Идентификатор в формате GUID. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["smzGetStatus"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "guid",
				},
		},
	},
	{
		displayName: "ИНН ФЛ (список)",
		name: "innfls",
		type: 'string',
		default: '',
		description: "ИНН ФЛ. Максимально можно указать 100 ИНН через запятую. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['personVerification'],
				operation: ["smzSendToCheck"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "innfls",
				},
		},
	},
];

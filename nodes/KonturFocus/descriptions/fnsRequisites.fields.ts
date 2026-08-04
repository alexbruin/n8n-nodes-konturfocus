import type { INodeProperties } from 'n8n-workflow';

export const fnsRequisitesFields: INodeProperties[] = [
	{
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Максимально можно указать 100 ОГРН через запятую. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['fnsRequisites'],
				operation: ["req", "egrDetails"],
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
				resource: ['fnsRequisites'],
				operation: ["req", "egrDetails"],
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
				resource: ['fnsRequisites'],
				operation: ["req", "foreignRepresentatives", "", "egrDetails"],
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
		description: "ОГРН организации. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['fnsRequisites'],
				operation: ["excerpt", ""],
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
				resource: ['fnsRequisites'],
				operation: ["excerpt", ""],
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
		displayName: "ИНН",
		name: "inn",
		type: 'string',
		default: '',
		description: "ИНН организации. Можно указать максимум 100 ИНН через запятую. Обязательный параметр, если не указан НЗА",
		displayOptions: {
			show: {
				resource: ['fnsRequisites'],
				operation: ["foreignRepresentatives"],
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
		displayName: "Номер записи о аккредитации (НЗА)",
		name: "nza",
		type: 'string',
		default: '',
		description: "НЗА организации. Можно указать максимум 100 НЗА через запятую. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['fnsRequisites'],
				operation: ["foreignRepresentatives"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "nza",
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
				resource: ['fnsRequisites'],
				operation: [""],
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
				resource: ['fnsRequisites'],
				operation: [""],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "take",
				},
		},
	},
];

import type { INodeProperties } from 'n8n-workflow';

export const financeFields: INodeProperties[] = [
	{
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Можно указать максимум 100 ОГРН через запятую. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['finance'],
				operation: ["finanValues", "ftsDebtors", "fnsBlockedBankAccounts"],
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
				resource: ['finance'],
				operation: ["finanValues", "ftsDebtors", "fnsBlockedBankAccounts"],
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
				resource: ['finance'],
				operation: ["finanValues", "bankAccounts", "ftsDebtors", "taxFigures", "buh", "fnsBlockedBankAccounts", "onlineCashRegisters", "taxes", "accountingReports"],
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
				resource: ['finance'],
				operation: ["bankAccounts", "buh", "onlineCashRegisters", "taxes", "accountingReports"],
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
				resource: ['finance'],
				operation: ["bankAccounts", "buh", "onlineCashRegisters", "taxes", "accountingReports"],
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
				resource: ['finance'],
				operation: ["onlineCashRegistersTradePoints", "taxFigures", "finan"],
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
				resource: ['finance'],
				operation: ["onlineCashRegistersTradePoints", "taxFigures", "finan"],
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
		description: "",
		displayOptions: {
			show: {
				resource: ['finance'],
				operation: ["onlineCashRegistersTradePoints"],
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
		displayName: "Токен пагинации",
		name: "pagingToken",
		type: 'string',
		default: '',
		description: "Токен пагинации. Указатель на следующий список элементов",
		displayOptions: {
			show: {
				resource: ['finance'],
				operation: ["onlineCashRegistersTradePoints"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "pagingToken",
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
				resource: ['finance'],
				operation: ["onlineCashRegistersTradePoints"],
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

import type { INodeProperties } from 'n8n-workflow';

export const financeOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['finance'],
			},
		},
		options: [
			{
				name: "Автоматический финансовый анализ",
				value: "finanValues",
				description: "Автоматический финансовый анализ",
				action: "Автоматический финансовый анализ",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/finanValues',
						},
					},
			},
			{
				name: "Банки, в которых ранее были найдены счета организации",
				value: "bankAccounts",
				description: "Банки, в которых ранее были найдены счета организации",
				action: "Банки, в которых ранее были найдены счета организации",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/bankAccounts',
						},
					},
			},
			{
				name: "Вхождение в перечень должников ФТС",
				value: "ftsDebtors",
				description: "Вхождение в перечень должников ФТС",
				action: "Вхождение в перечень должников ФТС",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/ftsDebtors',
						},
					},
			},
			{
				name: "Информация о торговых точках с онлайн-кассами",
				value: "onlineCashRegistersTradePoints",
				description: "Информация о торговых точках с онлайн-кассами",
				action: "Информация о торговых точках с онлайн-кассами",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/onlineCashRegistersTradePoints',
						},
					},
			},
			{
				name: "Налоговые показатели",
				value: "taxFigures",
				description: "Налоговые показатели",
				action: "Налоговые показатели",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/taxFigures',
						},
					},
			},
			{
				name: "Показатели бухгалтерской отчетности",
				value: "buh",
				description: "Показатели бухгалтерской отчетности",
				action: "Показатели бухгалтерской отчетности",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/buh',
						},
					},
			},
			{
				name: "Решения налоговых органов о приостановлении операций по счетам",
				value: "fnsBlockedBankAccounts",
				description: "Решения налоговых органов о приостановлении операций по счетам",
				action: "Решения налоговых органов о приостановлении операций по счетам",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/fnsBlockedBankAccounts',
						},
					},
			},
			{
				name: "Статистика по онлайн-кассам",
				value: "onlineCashRegisters",
				description: "Статистика по онлайн-кассам",
				action: "Статистика по онлайн-кассам",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/onlineCashRegistersStatistics',
						},
					},
			},
			{
				name: "Уплаченные налоги и сборы",
				value: "taxes",
				description: "Уплаченные налоги и сборы",
				action: "Уплаченные налоги и сборы",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/taxes',
						},
					},
			},
			{
				name: "Финансовый анализ",
				value: "finan",
				description: "Финансовый анализ",
				action: "Финансовый анализ",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/finan',
						},
					},
			},
			{
				name: "Формы бухгалтерской отчетности",
				value: "accountingReports",
				description: "Формы бухгалтерской отчетности",
				action: "Формы бухгалтерской отчетности",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/accountingReports',
						},
					},
			},
		],
		default: "finanValues",
	},
];

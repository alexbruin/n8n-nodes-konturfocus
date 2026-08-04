import type { INodeProperties } from 'n8n-workflow';

export const personVerificationOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['personVerification'],
			},
		},
		options: [
			{
				name: "Банкротство физлиц",
				value: "fizBankr",
				description: "Банкротство физлиц",
				action: "Банкротство физлиц",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/fizBankr',
						},
					},
			},
			{
				name: "Вхождение физлица в санкционные списки",
				value: "sanctionedPersons",
				description: "Вхождение физлица в санкционные списки",
				action: "Вхождение физлица в санкционные списки",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/sanctionedPersons',
						},
					},
			},
			{
				name: "Информация о банкротстве физлица",
				value: "personBankruptcy",
				description: "Информация о банкротстве физлица",
				action: "Информация о банкротстве физлица",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/personBankruptcy',
						},
					},
			},
			{
				name: "Поиск публичных должностных лиц",
				value: "pepSearch",
				description: "Поиск публичных должностных лиц",
				action: "Поиск публичных должностных лиц",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/pepSearch',
						},
					},
			},
			{
				name: "Полный список публичных должностных лиц",
				value: "allPeps",
				description: "Полный список публичных должностных лиц",
				action: "Полный список публичных должностных лиц",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/allPeps',
						},
					},
			},
			{
				name: "Проверка паспортов",
				value: "checkPassport",
				description: "Проверка паспортов",
				action: "Проверка паспортов",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/checkPassport',
						},
					},
			},
			{
				name: "Проверка статуса самозанятого",
				value: "smzGetStatus",
				description: "Проверка статуса самозанятого",
				action: "Проверка статуса самозанятого",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/smzGetStatus',
						},
					},
			},
			{
				name: "Регистрация задачи на проверку статуса самозанятого",
				value: "smzSendToCheck",
				description: "Регистрация задачи на проверку статуса самозанятого",
				action: "Регистрация задачи на проверку статуса самозанятого",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/smzSendToCheck',
						},
					},
			},
		],
		default: "fizBankr",
	},
];

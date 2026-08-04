import type { INodeProperties } from 'n8n-workflow';

export const contactsOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contacts'],
			},
		},
		options: [
			{
				name: "Сайты, привязанные к компании",
				value: "sites",
				description: "Сайты, привязанные к компании",
				action: "Сайты, привязанные к компании",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/sites',
						},
					},
			},
			{
				name: "Справочник адресов электронной почты",
				value: "contactEmails",
				description: "Справочник адресов электронной почты",
				action: "Справочник адресов электронной почты",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/contactEmails',
						},
					},
			},
			{
				name: "Справочник телефонов",
				value: "contacts",
				description: "Справочник телефонов",
				action: "Справочник телефонов",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/contacts',
						},
					},
			},
			{
				name: "Товарные знаки",
				value: "trademarks",
				description: "Товарные знаки",
				action: "Товарные знаки",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/trademarks',
						},
					},
			},
		],
		default: "sites",
	},
];

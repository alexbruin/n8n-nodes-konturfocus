import type { INodeProperties } from 'n8n-workflow';

export const purchasesOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['purchases'],
			},
		},
		options: [
			{
				name: "Банковские гарантии",
				value: "bankGuarantees",
				description: "Банковские гарантии",
				action: "Банковские гарантии",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/bankGuarantees',
						},
					},
			},
			{
				name: "Госзакупки заказчика",
				value: "govPurchasesOfCustomer",
				description: "Госзакупки заказчика",
				action: "Госзакупки заказчика",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/govPurchasesOfCustomer',
						},
					},
			},
			{
				name: "Госзакупки участника",
				value: "govPurchasesOfParticipant",
				description: "Госзакупки участника",
				action: "Госзакупки участника",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/govPurchasesOfParticipant',
						},
					},
			},
			{
				name: "Закупки заказчика",
				value: "allPurchasesOfCustomer",
				description: "Закупки заказчика",
				action: "Закупки заказчика",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/purchasesOfCustomer',
						},
					},
			},
			{
				name: "Закупки участника",
				value: "allPurchasesOfParticipant",
				description: "Закупки участника",
				action: "Закупки участника",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/purchasesOfParticipant',
						},
					},
			},
			{
				name: "Реестр недобросовестных поставщиков",
				value: "rnp",
				description: "Реестр недобросовестных поставщиков",
				action: "Реестр недобросовестных поставщиков",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/rnpDetails',
						},
					},
			},
		],
		default: "bankGuarantees",
	},
];

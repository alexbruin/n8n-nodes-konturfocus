import type { INodeProperties } from 'n8n-workflow';

export const leasingPledgesOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['leasingPledges'],
			},
		},
		options: [
			{
				name: "Договоры лизинга со стороны лизингополучателя",
				value: "lessee",
				description: "Договоры лизинга со стороны лизингополучателя",
				action: "Договоры лизинга со стороны лизингополучателя",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/lessee',
						},
					},
			},
			{
				name: "Залоги движимого имущества со стороны залогодателя",
				value: "pledger",
				description: "Залоги движимого имущества со стороны залогодателя",
				action: "Залоги движимого имущества со стороны залогодателя",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/pledger',
						},
					},
			},
		],
		default: "lessee",
	},
];

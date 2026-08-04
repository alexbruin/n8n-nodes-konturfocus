import type { INodeProperties } from 'n8n-workflow';

export const fnsRequisitesOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['fnsRequisites'],
			},
		},
		options: [
			{
				name: "Базовые реквизиты",
				value: "req",
				description: "Базовые реквизиты",
				action: "Базовые реквизиты",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/req',
						},
					},
			},
			{
				name: "Выписка из ЕГРЮЛ/ЕГРИП",
				value: "excerpt",
				description: "Выписка из ЕГРЮЛ/ЕГРИП",
				action: "Выписка из ЕГРЮЛ/ЕГРИП",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/excerpt',
						},
					},
			},
			{
				name: "Иностранные представительства и филиалы",
				value: "foreignRepresentatives",
				description: "Иностранные представительства и филиалы",
				action: "Иностранные представительства и филиалы",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/foreignRepresentatives',
						},
					},
			},
			{
				name: "Поданные заявления на государственную регистрацию изменений в ЕГРЮЛ/ЕГРИП",
				value: "",
				description: "Поданные заявления на государственную регистрацию изменений в ЕГРЮЛ/ЕГРИП",
				action: "Поданные заявления на государственную регистрацию изменений в ЕГРЮЛ/ЕГРИП",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/submittedStatements',
						},
					},
			},
			{
				name: "Расширенные сведения на основе ЕГРЮЛ/ЕГРИП",
				value: "egrDetails",
				description: "Расширенные сведения на основе ЕГРЮЛ/ЕГРИП",
				action: "Расширенные сведения на основе ЕГРЮЛ/ЕГРИП",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/egrDetails',
						},
					},
			},
		],
		default: "req",
	},
];

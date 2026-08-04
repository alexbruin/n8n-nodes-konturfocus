import type { INodeProperties } from 'n8n-workflow';

export const analyticsOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['analytics'],
			},
		},
		options: [
			{
				name: "Вхождение организации в реестры",
				value: "analyticLists",
				description: "Вхождение организации в реестры",
				action: "Вхождение организации в реестры",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/analyticLists',
						},
					},
			},
			{
				name: "Оценка арбитражных дел и судов общей юрисдикции",
				value: "courtAnalytics",
				description: "Оценка арбитражных дел и судов общей юрисдикции",
				action: "Оценка арбитражных дел и судов общей юрисдикции",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/courtAnalytics',
						},
					},
			},
			{
				name: "Оценка исполнительных производств",
				value: "fsspAnalytics",
				description: "Оценка исполнительных производств",
				action: "Оценка исполнительных производств",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/fsspAnalytics',
						},
					},
			},
			{
				name: "Оценка по госзакупкам и вхождение в РНП",
				value: "purchasesAnalytics",
				description: "Оценка по госзакупкам и вхождение в РНП",
				action: "Оценка по госзакупкам и вхождение в РНП",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/purchasesAnalytics',
						},
					},
			},
			{
				name: "Оценка по связанным организациям",
				value: "linkAnalytics",
				description: "Оценка по связанным организациям",
				action: "Оценка по связанным организациям",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/linkAnalytics',
						},
					},
			},
			{
				name: "Оценка по финансам и налогам",
				value: "financeAnalytics",
				description: "Оценка по финансам и налогам",
				action: "Оценка по финансам и налогам",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/financeAnalytics',
						},
					},
			},
			{
				name: "Плановые и внеплановые проверки из ЕРП",
				value: "inspections",
				description: "Плановые и внеплановые проверки из ЕРП",
				action: "Плановые и внеплановые проверки из ЕРП",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/inspections',
						},
					},
			},
			{
				name: "Плановые и внеплановые проверки по данным ФГИС ЕРКНМ",
				value: "unifiedInspections",
				description: "Плановые и внеплановые проверки по данным ФГИС ЕРКНМ",
				action: "Плановые и внеплановые проверки по данным ФГИС ЕРКНМ",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/unifiedInspections',
						},
					},
			},
			{
				name: "Признаки банкротства",
				value: "bankruptcyAnalytics",
				description: "Признаки банкротства",
				action: "Признаки банкротства",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/bankruptcyAnalytics',
						},
					},
			},
			{
				name: "Расширенная аналитика",
				value: "analytics",
				description: "Расширенная аналитика",
				action: "Расширенная аналитика",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/analytics',
						},
					},
			},
			{
				name: "Сведения о получателях мер поддержки",
				value: "enterpriseSupport",
				description: "Сведения о получателях мер поддержки",
				action: "Сведения о получателях мер поддержки",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/enterpriseSupport',
						},
					},
			},
			{
				name: "Скоринговая оценка",
				value: "scoring",
				description: "Скоринговая оценка",
				action: "Скоринговая оценка",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/scoring',
						},
					},
			},
			{
				name: "Экспресс-отчет по контрагенту",
				value: "briefReport",
				description: "Экспресс-отчет по контрагенту",
				action: "Экспресс-отчет по контрагенту",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/briefReport',
						},
					},
			},
			{
				name: "Юридические признаки",
				value: "legalAnalytics",
				description: "Юридические признаки",
				action: "Юридические признаки",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/legalAnalytics',
						},
					},
			},
		],
		default: "analyticLists",
	},
];

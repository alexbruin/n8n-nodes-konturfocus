import type { INodeProperties } from 'n8n-workflow';

export const affiliationsOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['affiliations'],
			},
		},
		options: [
			{
				name: "Аналитика организаций, связанных с компанией",
				value: "companyAffiliatesAnalytics",
				description: "Аналитика организаций, связанных с компанией",
				action: "Аналитика организаций, связанных с компанией",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/companyAffiliates/analytics',
						},
					},
			},
			{
				name: "Аналитика организаций, связанных с человеком",
				value: "personAffiliatesAnalytics",
				description: "Аналитика организаций, связанных с человеком",
				action: "Аналитика организаций, связанных с человеком",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/personAffiliates/analytics',
						},
					},
			},
			{
				name: "Ближайшие связи компаний",
				value: "companyAffiliationsTypes",
				description: "Ближайшие связи компаний",
				action: "Ближайшие связи компаний",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/companyAffiliationsTypes',
						},
					},
			},
			{
				name: "История владения организацией",
				value: "foundersHistory",
				description: "История владения организацией",
				action: "История владения организацией",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/foundersHistory',
						},
					},
			},
			{
				name: "Конечные владельцы",
				value: "beneficialOwners",
				description: "Конечные владельцы",
				action: "Конечные владельцы",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/beneficialOwners',
						},
					},
			},
			{
				name: "Расширенные сведения организаций, связанных с компанией",
				value: "companyAffiliatesEgrDetails",
				description: "Расширенные сведения организаций, связанных с компанией",
				action: "Расширенные сведения организаций, связанных с компанией",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/companyAffiliates/egrDetails',
						},
					},
			},
			{
				name: "Расширенные сведения организаций, связанных с человеком",
				value: "personAffiliatesEgrDetails",
				description: "Расширенные сведения организаций, связанных с человеком",
				action: "Расширенные сведения организаций, связанных с человеком",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/personAffiliates/egrDetails',
						},
					},
			},
			{
				name: "Реквизиты организаций, связанных с компанией",
				value: "companyAffiliatesReq",
				description: "Реквизиты организаций, связанных с компанией",
				action: "Реквизиты организаций, связанных с компанией",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/companyAffiliates/req',
						},
					},
			},
			{
				name: "Реквизиты организаций, связанных с человеком",
				value: "personAffiliatesReq",
				description: "Реквизиты организаций, связанных с человеком",
				action: "Реквизиты организаций, связанных с человеком",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/personAffiliates/req',
						},
					},
			},
		],
		default: "companyAffiliatesAnalytics",
	},
];

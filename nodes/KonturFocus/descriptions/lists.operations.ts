import type { INodeProperties } from 'n8n-workflow';

export const listsOperations: INodeProperties[] = [
	{
		displayName: 'Операция',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['lists'],
			},
		},
		options: [
			{
				name: "Импорт списков",
				value: "listsImport",
				description: "Импорт списков",
				action: "Импорт списков",
				routing: {
						request: {
							method: 'POST',
							url: '/api3/lists/import',
						},
					},
			},
			{
				name: "Списки",
				value: "lists",
				description: "Списки",
				action: "Списки",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/lists',
						},
					},
			},
			{
				name: "Списки организаций",
				value: "listsMatches",
				description: "Списки организаций",
				action: "Списки организаций",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/listsMatches',
						},
					},
			},
			{
				name: "Списки, в которые были добавлены организации, связанные с человеком",
				value: "personAffiliatesListsMatches",
				description: "Списки, в которые были добавлены организации, связанные с человеком",
				action: "Списки, в которые были добавлены организации, связанные с человеком",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/personAffiliates/listsMatches',
						},
					},
			},
			{
				name: "Списки, в которые входят связанные организации",
				value: "companyAffiliatesListsMatches",
				description: "Списки, в которые входят связанные организации",
				action: "Списки, в которые входят связанные организации",
				routing: {
						request: {
							method: 'GET',
							url: '/api3/companyAffiliates/listsMatches',
						},
					},
			},
		],
		default: "listsImport",
	},
];

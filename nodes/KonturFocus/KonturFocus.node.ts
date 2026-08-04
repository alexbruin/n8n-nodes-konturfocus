import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

import { konturFocusProperties } from './descriptions';

export class KonturFocus implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Kontur Focus',
		name: 'konturFocus',
		icon: 'file:konturfocus.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		description: 'Работа с API Контур Фокуса (проверка контрагентов, реквизиты, финансы, аналитика, связи)',
		defaults: {
			name: 'Kontur Focus',
		},
		inputs: ['main'],
		outputs: ['main'],
		usableAsTool: true,
		credentials: [
			{
				name: 'konturFocusApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '',
			json: true,
		},
		properties: konturFocusProperties,
	};
}

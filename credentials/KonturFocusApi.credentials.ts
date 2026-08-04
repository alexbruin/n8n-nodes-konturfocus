import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class KonturFocusApi implements ICredentialType {
	name = 'konturFocusApi';

	displayName = 'Kontur Focus API';

	documentationUrl = 'https://developer.kontur.ru/doc/focus-v2';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description:
				'Ключ доступа к API Контур Фокуса. Выдаётся компанией СКБ Контур, тестовый ключ можно получить через заявку на сайте focus.kontur.ru',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://focus-api.kontur.ru',
			description: 'Адрес сервера API Контур Фокуса. Менять не нужно, если Контур не выдал вам отдельный адрес',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				key: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/api3/stat',
		},
	};
}

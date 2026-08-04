import type { INodeProperties } from 'n8n-workflow';

export const monitoringFields: INodeProperties[] = [
	{
		displayName: "Метод API",
		name: "method",
		type: 'string',
		default: '',
		description: "Метод API Фокуса, по схеме которого нужно получить изменение. Возможные значения: - req - egrDetails Для каждого доступного метода у вас задается свой список наблюдаемых компаний. Посмотреть и отредактировать ваши списки на наблюдении можно через HTTP-методы `api3/monitoringList`",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringListPost"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "method",
				},
		},
	},
	{
		displayName: "Метод API",
		name: "method",
		type: 'string',
		default: '',
		description: "Метод API Фокуса, по схеме которого нужно получить изменение. Возможные значения: - req - egrDetails",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetAllChanges"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "method",
				},
		},
	},
	{
		displayName: "ID изменения",
		name: "changeId",
		type: 'number',
		default: 0,
		description: "Идентификатор изменения. Для старта наблюдения нужно использовать **минимальное значения** `changeId`, из числа полученных `changeId` в ответе[метода полных состояний](https://developer.kontur.ru/doc/focus-v2/method?type=get&path=%2Fapi3%2FmonitoringALLGetStates). Для последовательного чтения изменений, нужно использовать **последний** `changeId` (максимальный по значению) из предыдущего непустого ответа метода чтения изменений.",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetAllChanges"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "changeId",
				},
		},
	},
	{
		displayName: "Первые изменения за период хранения",
		name: "getFirstChangesFromTTL",
		type: 'boolean',
		default: false,
		description: "Параметр получения всех известных изменений за последние 3 месяца (90 дней) по всем компаниям ЕГРЮЛ/ЕГРИП. Подробнее про параметр читайте выше в описании метода.",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetAllChanges"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "getFirstChangesFromTTL",
					value: '={{$value}}',
				},
		},
	},
	{
		displayName: "Без детализации",
		name: "withoutDetails",
		type: 'boolean',
		default: false,
		description: "Параметр получения ответа без подробностей об изменениях. Подробнее про параметр читайте выше в описании метода.",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetAllChanges", "monitoringGetChanges"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "withoutDetails",
					value: '={{$value}}',
				},
		},
	},
	{
		displayName: "Метод API",
		name: "method",
		type: 'string',
		default: '',
		description: "Метод API Фокуса, по схеме которого нужно получить изменение. Возможные значения: - req - egrDetails Для каждого доступного метода у вас задается свой список наблюдаемых компаний. Посмотреть и отредактировать ваши списки на наблюдении можно через HTTP-методы `api3/monitoringList`",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetChanges"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "method",
				},
		},
	},
	{
		displayName: "ID изменения",
		name: "changeId",
		type: 'number',
		default: 0,
		description: "Идентификатор изменения. Для старта наблюдения нужно использовать **минимальное значения** `changeId`, из числа полученных `changeId` в ответе [метода полных состояний](https://developer.kontur.ru/doc/focus-v2/method?type=get&path=%2Fapi3%2FmonitoringGetStates). Для последовательного чтения изменений, нужно использовать **последний** `changeId` (максимальный по значению) из предыдущего непустого ответа метода чтения изменений.",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetChanges"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "changeId",
				},
		},
	},
	{
		displayName: "Первые изменения за период хранения",
		name: "getFirstChangesFromTTL",
		type: 'boolean',
		default: false,
		description: "Параметр получения всех известных изменений за последние 3 месяца (90 дней) по компаниям вашего списка. Подробнее про параметр читайте выше в описании метода.",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetChanges"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "getFirstChangesFromTTL",
					value: '={{$value}}',
				},
		},
	},
	{
		displayName: "Метод API",
		name: "method",
		type: 'string',
		default: '',
		description: "Метод API Фокуса, по схеме которого нужно получить изменение. Возможные значения: - req - egrDetails",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetAllStates"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "method",
				},
		},
	},
	{
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Максимально можно указать 100 ОГРН через запятую. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetAllStates", "monitoringGetStates"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "ogrn",
				},
		},
	},
	{
		displayName: "Метод API",
		name: "method",
		type: 'string',
		default: '',
		description: "Метод API Фокуса, по схеме которого нужно получить изменение. Возможные значения: - req - egrDetails Для каждого доступного метода у вас задается свой список наблюдаемых компаний. Посмотреть и отредактировать ваши списки на наблюдении можно через HTTP-методы `api3/monitoringList`",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringGetStates"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "method",
				},
		},
	},
	{
		displayName: "Метод API",
		name: "method",
		type: 'string',
		default: '',
		description: "Метод API Фокуса, по схеме которого нужно получить изменение. Возможные значения: req, egrDetails. Для каждого доступного метода у вас задается свой список наблюдаемых компаний. Посмотреть и отредактировать ваши списки на наблюдении можно через HTTP-методы api3/monitoringList",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringList"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "method",
				},
		},
	},
	{
		displayName: "Пропустить записей",
		name: "skip",
		type: 'number',
		default: 0,
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой 100 записей параметр можно не указывать. Для получения второй 100 необходимо указать skip=100 и так далее",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringList"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "skip",
				},
		},
	},
	{
		displayName: "Взять записей",
		name: "take",
		type: 'number',
		default: 0,
		description: "Количество записей, которых нужно вернуть в ответе. Максимальное значение и значение по умолчанию равно 10 000. Для получения первых 10000 записей параметр можно не указывать. Для получения вторых 10000 необходимо указать take=10000 и так далее",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringList"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "take",
				},
		},
	},
	{
		displayName: "Метод API",
		name: "method",
		type: 'string',
		default: '',
		description: "Метод API Фокуса, по схеме которого нужно получить изменение. Возможные значения: - req - egrDetails Для каждого доступного метода у вас задается свой список наблюдаемых компаний. Посмотреть и отредактировать ваши списки на наблюдении можно через HTTP-методы `api3/monitoringList`",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringListDelete"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "method",
				},
		},
	},
	{
		displayName: "Очистить весь список",
		name: "clearAllCompaniesFromList",
		type: 'boolean',
		default: false,
		description: "Параметр для полной очистки списка, т.е. для удаления всех компаний из списка на наблюдении",
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringListDelete"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "clearAllCompaniesFromList",
					value: '={{$value}}',
				},
		},
	},
	{
		displayName: 'Список организаций (JSON)',
		name: 'companiesBody',
		type: 'json',
		default: '[]',
		description: 'Массив объектов организаций для метода наблюдения, например [{"inn":"7707083893"}]. Формат объекта CompanyInfo см. в документации метода.',
		displayOptions: {
			show: {
				resource: ['monitoring'],
				operation: ["monitoringListPost", "monitoringListDelete"],
			},
		},
		routing: {
			request: {
				body: '={{ JSON.parse($value) }}',
			},
		},
	},
];

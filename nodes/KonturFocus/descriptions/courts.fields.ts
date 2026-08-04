import type { INodeProperties } from 'n8n-workflow';

export const courtsFields: INodeProperties[] = [
	{
		displayName: "ОГРН",
		name: "ogrn",
		type: 'string',
		default: '',
		description: "ОГРН организации. Обязательный параметр, если не указан ИНН",
		displayOptions: {
			show: {
				resource: ['courts'],
				operation: ["fssp", "petitionersOfArbitration", "generalCourtCases"],
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
		displayName: "ИНН",
		name: "inn",
		type: 'string',
		default: '',
		description: "ИНН организации. Обязательный параметр, если не указан ОГРН",
		displayOptions: {
			show: {
				resource: ['courts'],
				operation: ["fssp", "petitionersOfArbitration", "generalCourtCases"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "inn",
				},
		},
	},
	{
		displayName: "Формат XML",
		name: "xml",
		type: 'boolean',
		default: false,
		description: "При значении true возвращает ответ в формате xml. Значение по умолчанию: false",
		displayOptions: {
			show: {
				resource: ['courts'],
				operation: ["fssp", "petitionersOfArbitration", "generalCourtCases"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "xml",
					value: '={{$value}}',
				},
		},
	},
	{
		displayName: "Пропустить записей",
		name: "skip",
		type: 'number',
		default: 0,
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой 1000 исполнительных производств параметр можно не указывать. Для получения второй 1000 необходимо указать skip=1000 и так далее",
		displayOptions: {
			show: {
				resource: ['courts'],
				operation: ["fssp"],
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
		displayName: "Пропустить записей",
		name: "skip",
		type: 'number',
		default: 0,
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой сотни истцов параметр можно не указывать. Для получения второй сотни необходимо указать skip=100 и так далее",
		displayOptions: {
			show: {
				resource: ['courts'],
				operation: ["petitionersOfArbitration"],
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
		default: 100,
		description: "Количество записей, которых нужно вернуть в ответе. Для получения первой 100 записей параметр можно не указывать. Для получения второй 100 необходимо указать take=100 и так далее",
		displayOptions: {
			show: {
				resource: ['courts'],
				operation: ["petitionersOfArbitration", "generalCourtCases"],
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
		displayName: "Роль",
		name: "role",
		type: 'string',
		default: '',
		description: "Вид лица, участвующего в деле\\n\\nМожет принимать значения:\\n- `All` - В ответе вернутся дела со всеми возможными ролями, в которых участвовало проверяемое лицо\\n- `Defendant` - В ответе вернутся дела, в которых проверяемое лицо имеет роль \\\"ответчика\\\": ответчик/привлекаемое лицо/обвиняемый/подсудимый\\n- `Plaintiff` - В ответе вернутся дела в которых проверяемое лицо имеет роль \\\"истца\\\": истец/заявитель/взыскатель/подавший жалобу\\n- `Other` - В ответе вернутся дела в которых проверяемое лицо имеет роль \\\"Третье лицо\\\": другой/третье лицо/третья сторона\\n\\nПо умолчанию мы считаем `role=All`, если параметр не указан в запросе.",
		displayOptions: {
			show: {
				resource: ['courts'],
				operation: ["generalCourtCases"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "role",
				},
		},
	},
	{
		displayName: "Тип",
		name: "type",
		type: 'string',
		default: '',
		description: "Тип дела (Вид судопроизводства)",
		displayOptions: {
			show: {
				resource: ['courts'],
				operation: ["generalCourtCases"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "type",
				},
		},
	},
	{
		displayName: "Пропустить записей",
		name: "skip",
		type: 'number',
		default: 0,
		description: "Количество записей, которые нужно пропустить от начала списка. Для получения первой 100 результатов параметр можно не указывать. Для получения второй 100 необходимо указать skip=100 и так далее",
		displayOptions: {
			show: {
				resource: ['courts'],
				operation: ["generalCourtCases"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "skip",
				},
		},
	},
];

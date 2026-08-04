import type { INodeProperties } from 'n8n-workflow';

export const searchFields: INodeProperties[] = [
	{
		displayName: "Дата",
		name: "date",
		type: 'string',
		default: '',
		description: "Дата в формате «ГГГГ-ММ-ДД». Допустимо указывать дату в пределах 30 дней от сегодняшнего дня. Обязательный параметр",
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ["selectionByRegDate"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "date",
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
				resource: ['search'],
				operation: ["selectionByRegDate", "search", "suggest"],
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
		displayName: "Поисковый запрос",
		name: "q",
		type: 'string',
		default: '',
		description: "Поисковой запрос",
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ["search", "suggest"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "q",
				},
		},
	},
	{
		displayName: "Регион",
		name: "region",
		type: 'string',
		default: '',
		description: "Код региона. Для использования фильтрации по региону. Возможные занчения: 01-99",
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ["search"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "region",
				},
		},
	},
	{
		displayName: "Страница",
		name: "page",
		type: 'string',
		default: '',
		description: "Номер возвращаемой страницы. На одной странице возвращается не более 10 результатов поиска. Если параметр page отсутствует, то считается, что page=1. Максимально допустимое количество страниц — 50",
		displayOptions: {
			show: {
				resource: ['search'],
				operation: ["search"],
			},
		},
		routing: {
			send: {
					type: 'query',
					property: "page",
				},
		},
	},
];

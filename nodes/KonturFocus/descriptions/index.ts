import type { INodeProperties } from 'n8n-workflow';
import { searchOperations } from './search.operations';
import { fnsRequisitesOperations } from './fnsRequisites.operations';
import { analyticsOperations } from './analytics.operations';
import { affiliationsOperations } from './affiliations.operations';
import { financeOperations } from './finance.operations';
import { personVerificationOperations } from './personVerification.operations';
import { purchasesOperations } from './purchases.operations';
import { bankruptcyLegalOperations } from './bankruptcyLegal.operations';
import { courtsOperations } from './courts.operations';
import { licensesOperations } from './licenses.operations';
import { leasingPledgesOperations } from './leasingPledges.operations';
import { contactsOperations } from './contacts.operations';
import { cisRequisitesOperations } from './cisRequisites.operations';
import { chinaCompaniesOperations } from './chinaCompanies.operations';
import { listsOperations } from './lists.operations';
import { monitoringOperations } from './monitoring.operations';
import { monitoringLegacyOperations } from './monitoringLegacy.operations';
import { webAccessOperations } from './webAccess.operations';
import { serviceOperations } from './service.operations';
import { searchFields } from './search.fields';
import { fnsRequisitesFields } from './fnsRequisites.fields';
import { analyticsFields } from './analytics.fields';
import { affiliationsFields } from './affiliations.fields';
import { financeFields } from './finance.fields';
import { personVerificationFields } from './personVerification.fields';
import { purchasesFields } from './purchases.fields';
import { bankruptcyLegalFields } from './bankruptcyLegal.fields';
import { courtsFields } from './courts.fields';
import { licensesFields } from './licenses.fields';
import { leasingPledgesFields } from './leasingPledges.fields';
import { contactsFields } from './contacts.fields';
import { cisRequisitesFields } from './cisRequisites.fields';
import { chinaCompaniesFields } from './chinaCompanies.fields';
import { listsFields } from './lists.fields';
import { monitoringFields } from './monitoring.fields';
import { monitoringLegacyFields } from './monitoringLegacy.fields';
import { webAccessFields } from './webAccess.fields';
import { serviceFields } from './service.fields';

export const resourceProperty: INodeProperties = {
	displayName: 'Ресурс',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
			{ name: "Поиск компаний", value: "search" },
			{ name: "ФНС. Базовые реквизиты", value: "fnsRequisites" },
			{ name: "Аналитика и оценка компаний", value: "analytics" },
			{ name: "Информация о связях", value: "affiliations" },
			{ name: "Финансы и налоги", value: "finance" },
			{ name: "Данные для проверки физических лиц", value: "personVerification" },
			{ name: "Закупки и РНП", value: "purchases" },
			{ name: "Банкротство ЮЛ", value: "bankruptcyLegal" },
			{ name: "Судебная информация и исполнительные производства", value: "courts" },
			{ name: "Лицензии, сертификация и деятельность", value: "licenses" },
			{ name: "Лизинги и залоги", value: "leasingPledges" },
			{ name: "Контакты, сайты и торговые марки", value: "contacts" },
			{ name: "Базовые реквизиты компаний СНГ", value: "cisRequisites" },
			{ name: "Данные по компаниям из КНР", value: "chinaCompanies" },
			{ name: "Работа со списками веб-версии Фокуса", value: "lists" },
			{ name: "Наблюдение", value: "monitoring" },
			{ name: "Наблюдение (старая версия методов)", value: "monitoringLegacy" },
			{ name: "Доступ в веб Фокуса", value: "webAccess" },
			{ name: "Сервисные методы", value: "service" },
	],
	default: "search",
};

export const konturFocusProperties: INodeProperties[] = [
	resourceProperty,
	...searchOperations,
	...fnsRequisitesOperations,
	...analyticsOperations,
	...affiliationsOperations,
	...financeOperations,
	...personVerificationOperations,
	...purchasesOperations,
	...bankruptcyLegalOperations,
	...courtsOperations,
	...licensesOperations,
	...leasingPledgesOperations,
	...contactsOperations,
	...cisRequisitesOperations,
	...chinaCompaniesOperations,
	...listsOperations,
	...monitoringOperations,
	...monitoringLegacyOperations,
	...webAccessOperations,
	...serviceOperations,
	...searchFields,
	...fnsRequisitesFields,
	...analyticsFields,
	...affiliationsFields,
	...financeFields,
	...personVerificationFields,
	...purchasesFields,
	...bankruptcyLegalFields,
	...courtsFields,
	...licensesFields,
	...leasingPledgesFields,
	...contactsFields,
	...cisRequisitesFields,
	...chinaCompaniesFields,
	...listsFields,
	...monitoringFields,
	...monitoringLegacyFields,
	...webAccessFields,
	...serviceFields,
];

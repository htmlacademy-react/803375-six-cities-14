export enum AppRoute {
  Cities = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PagesTitle {
	Cities = 'Шесть городов',
	Favorites = 'Шесть городов. Избранное',
	Login = 'Шесть городов. Авторизация',
	Offer = 'Шесть городов. Предложения',
	PageNotFound = '404'
}

export const STARS_COUNT = 5;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

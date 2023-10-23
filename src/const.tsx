export const OFFER_CARD_COUNT = 5;

export enum AppRoute {
  Cities = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer/:id'
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

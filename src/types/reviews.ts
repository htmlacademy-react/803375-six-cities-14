export type TUser = {
	avatarUrl: string;
	id: number;
	isPro: boolean;
	name: string;
}

export type TReview = {
	comment: string;
	date: string;
	id: number;
	rating: number;
	user: TUser;
}

export type TReviews = TReview[]

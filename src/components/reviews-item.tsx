import {TReview} from '../types/reviews';
import {getStarRating} from '../helpers/get-star-rating';

type ReviewsProps = {
  review: TReview;
}

export default function ReviewsItem ({review}: ReviewsProps) {
  function getMonthName (date: Date) {
    const monthName = date.toLocaleString('default', { month: 'long' });
    return monthName.charAt(0).toUpperCase() + monthName.slice(1);
  }

  function getDate () {
    const reviewDate = new Date(review.date);
    const day = reviewDate.getDate();
    const month = reviewDate.getMonth() + 1;
    const year = reviewDate.getFullYear();
    const dateTime = `${day}-${month}-${year}`;
    const dateText = `${getMonthName(reviewDate)} ${year}`;

    return {
      dateTime: dateTime,
      dateText: dateText
    };
  }

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getStarRating(review.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={getDate().dateTime}>{getDate().dateText}</time>
      </div>
    </li>
  );
}

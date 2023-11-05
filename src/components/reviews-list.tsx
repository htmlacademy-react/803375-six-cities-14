import CommentForm from './comment-form';
import ReviewsItem from './reviews-item';
import {TReviews} from '../types/reviews';

type ReviewsProps = {
  reviews: TReviews;
}

export default function ReviewsList ({reviews}: ReviewsProps) {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <ReviewsItem review={review} key={review.id} />)
        }
      </ul>
      <CommentForm />
    </section>
  );
}

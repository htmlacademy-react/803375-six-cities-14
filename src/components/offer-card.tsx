import {Link} from 'react-router-dom';
import {AppRoute} from '../const';
import {TOffer} from '../types/offers';
import {getStarRating} from '../helpers/get-star-rating';

type OfferCardProps = {
  offer: TOffer;
  offerCardClass: string;
  onItemHover?: (listItemName: string) => void | undefined;
}

export default function OfferCard ({offer, offerCardClass, onItemHover}: OfferCardProps) {
  return (
    <article className={`${offerCardClass}__card place-card`} key={offer.id} onMouseEnter={() => onItemHover && onItemHover(offer.title)}>
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${offerCardClass}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getStarRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

import {useParams, Navigate} from 'react-router-dom';
import {TOffers} from '../../types/offers';
import {TReviews} from '../../types/reviews';
import {TCity} from '../../types/city';
import {TPoints, TPoint} from '../../types/points';
import {getStarRating} from '../../helpers/get-star-rating';
import Map from '../../components/map';
import SEO from '../../components/SEO';
import ReviewsList from '../../components/reviews-list';
import NearPlacesList from '../../components/near-places-list';

type OfferScreenProps = {
  pageTitle: string;
  offers: TOffers;
  reviews: TReviews;
  points: TPoints;
  city: TCity;
}

export default function Offer({offers, reviews, pageTitle, points, city}: OfferScreenProps) {

  const params = useParams();
  const offer = offers.find((el) => Number(el.id) === Number(params.id));

  if (!offer) {
    return (<Navigate to="/" />);
  }

  const selectedPoint: TPoint = {
    lat: offer.location.latitude,
    lng: offer.location.longitude,
    title: offer.title
  };

  return (
    <>
      <SEO pageTitle={pageTitle} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src={offer.previewImage} alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                offer.isPremium &&
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getStarRating(offer.rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">
                  What&apos;s inside
                </h2>
                <ul className="offer__inside-list">
                  {
                    offer.goods.map((good) => <li className="offer__inside-item" key={good}>{good}</li>)
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.isPro &&
                      <span className="offer__user-status">
                        Pro
                      </span>
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={reviews} />
            </div>
            <section className="offer__map map">
              <Map city={city} points={points} selectedPoint={selectedPoint} />
            </section>
          </div>
        </section>
        <div className="container">
          <NearPlacesList offers={offers} />
        </div>
      </main>
    </>
  );
}

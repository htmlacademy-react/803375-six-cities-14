import OfferCard from './offer-card';
import {TOffers} from '../types/offers';

type ListProps = {
  offers: TOffers;
}

export default function OffersList({offers}: ListProps) {
  const offerCardClass = 'favorites';

  return (
    <ul className="favorites__list">
      {
        offers.map((offer) => (
          <li className="favorites__locations-items" key={offer.id}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{offer.city.name}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              <OfferCard offer={offer} offerCardClass={offerCardClass} />
            </div>
          </li>
        ))
      }
    </ul>
  );
}

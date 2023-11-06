import OfferCard from './offer-card';
import {TOffers} from '../types/offers';

type ListProps = {
  offers: TOffers;
}

export default function NearPlacesList ({offers}: ListProps) {
  const offerCardClass = 'near-places';
  const firstThreeOffers = offers.slice(0, 3);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          firstThreeOffers.map((offer) => <OfferCard offer={offer} offerCardClass={offerCardClass} key={offer.id} />)
        }
      </div>
    </section>
  );
}

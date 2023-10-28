import OfferCard from './offer-card';
import {OffersType} from '../types/offers';

type ListProps = {
  offers: OffersType;
}

export default function OffersList({offers}: ListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <OfferCard offer={offer} key={offer.id} />)
      }
    </div>
  );
}

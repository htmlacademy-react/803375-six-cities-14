import {TOffers} from '../types/offers';
import OfferCard from './offer-card';

type ListProps = {
  offers: TOffers;
  onListItemHover: (listItemName: string) => void;
}

export default function OffersList({offers, onListItemHover}: ListProps) {
  const offerCardClass = 'cities';

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard offer={offer} offerCardClass={offerCardClass} onItemHover={onListItemHover} key={offer.id} />
        ))
      }
    </div>
  );
}

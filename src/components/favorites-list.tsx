import FavoriteCard from './favorite-card';
import {OffersType} from '../types/offers';

type ListProps = {
  offers: OffersType;
}

export default function OffersList({offers}: ListProps) {
  return (
    <ul className="favorites__list">
      {
        offers.map((offer) => <FavoriteCard offer={offer} key={offer.id} />)
      }
    </ul>
  );
}

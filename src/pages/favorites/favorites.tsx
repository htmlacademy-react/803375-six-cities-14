import SEO from '../../components/SEO';
import FavoritesList from '../../components/favorites-list';

import {OffersType} from '../../types/offers';

type FavoritesScreenProps = {
	offers: OffersType;
	pageTitle: string;
}

export default function Favorites({offers, pageTitle}: FavoritesScreenProps) {
  return (
    <>
      <SEO pageTitle={pageTitle} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
    </>
  );
}

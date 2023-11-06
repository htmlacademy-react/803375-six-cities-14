import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus, PagesTitle} from '../const';
import {TOffers} from '../types/offers';
import {TCity} from '../types/city';
import {TPoints} from '../types/points';
import {TReviews} from '../types/reviews';
import Layout from './layout';
import PrivateRoute from './private-route';
import Cities from '../pages/cities/cities';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import Login from '../pages/login/login';
import PageNotFound from '../pages/page-not-found/page-not-found';

type AppProps = {
	offers: TOffers;
	city: TCity;
	points: TPoints;
	reviews: TReviews;
}

export default function App({offers, city, points, reviews}: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Cities}
            element={<Layout />}
          >
            <Route
              index
              element={<Cities offers={offers} pageTitle={PagesTitle.Cities} city={city} points={points} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.Auth}
                >
                  <Favorites offers={offers} pageTitle={PagesTitle.Favorites} />
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={<Offer offers={offers} reviews={reviews} pageTitle={PagesTitle.Offer} city={city} points={points} />}
            />
            <Route
              path={AppRoute.Login}
              element={<Login pageTitle={PagesTitle.Login} />}
            />
            <Route
              path="*"
              element={<PageNotFound pageTitle={PagesTitle.PageNotFound} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

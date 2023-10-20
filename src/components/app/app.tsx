import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {OFFER_CARD_COUNT, AppRoute, AuthorizationStatus, PagesTitle} from '../../const';
import Layout from '../layout';
import PrivateRoute from '../private-route';
import Cities from '../../pages/cities/cities';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import Login from '../../pages/login/login';
import PageNotFound from '../../pages/page-not-found/page-not-found';

export default function App() {
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
              element={<Cities offerCardCount={OFFER_CARD_COUNT} pageTitle={PagesTitle.Cities} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.NoAuth}
                >
                  <Favorites pageTitle={PagesTitle.Favorites} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer pageTitle={PagesTitle.Offer} />}
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

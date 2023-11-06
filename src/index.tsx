import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import { OFFERS } from './mocks/offers';
import { CITY } from './mocks/city';
import { POINTS } from './mocks/points';
import { REVIEWS } from './mocks/reviews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={OFFERS} points={POINTS} city={CITY} reviews={REVIEWS} />
  </React.StrictMode>
);

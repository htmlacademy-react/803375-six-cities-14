import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/cities/app';
import Header from './components/header';
import Footer from './components/footer';
import {TimeConstants} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header />
    <App offerCardCount={ TimeConstants.OFFER_CARD_COUNT } />
    <Footer />
  </React.StrictMode>
);

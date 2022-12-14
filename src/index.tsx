import React from 'react';
import ReactDOM from 'react-dom/client';

// React redux give us a provider, allowing the store, being accessible everywhere
// That is why we need to include all our website in the Provider.
import { Provider } from 'react-redux';

import {store} from "./store/store";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// The header is the navigation bar
import Header from "./components/Header";

// The two "pages" of the site
import Map from "./components/routes/map/Map";

// The project is using bootstrap for the css
// See more https://react-bootstrap.github.io/
import 'bootstrap/dist/css/bootstrap.min.css';
import Travel from './components/routes/travel/Travel';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// This is the entry point of the site
// We define "routes", each routes will display a component.
root.render(
      <Provider store={store}>
          <Router>
              <Header/>
              <Routes>
                  <Route path="/" element={<Map/>} />
                  <Route path="/map" element={<Map/>} />
                  <Route path="/travel/:id" element={<Travel/>} />
              </Routes>
          </Router>
      </Provider>
);
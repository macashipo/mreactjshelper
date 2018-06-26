import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Buttons = Loadable({
  loader: () => import('./Buttons'),
  loading: Loading,
});

const Color = Loadable({
  loader: () => import('./Theme/Colors'),
  loading: Loading,
});

const Typo = Loadable({
  loader: () => import('./Theme/Typography'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/mcoreui/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/mcoreui/color', name: 'Color', component: Color, exact: true },
  { path: '/mcoreui/typo', name: 'Typo', component: Typo, exact: true },
];

export default routes;

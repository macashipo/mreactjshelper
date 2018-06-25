import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div>Loading...</div>;
}

const Buttons = Loadable({
  loader: () => import('./Buttons'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/mcoreui/buttons', name: 'Buttons', component: Buttons, exact: true },
];

export default routes;

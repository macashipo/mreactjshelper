import React from 'react';
import Loadable from 'react-loadable'
const PathPrefix = "/workflow/";

function Loading() {
  return <div>Loading...</div>;
}

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

const routes = [
  { path: PathPrefix +'home', name: 'Home', component: Home, exact: true },
  
];

export default routes;

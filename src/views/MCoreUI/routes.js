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

const Calendar = Loadable({
  loader: () => import('./Calendar'),
  loading: Loading,
});
const Form = Loadable({
  loader: () => import('./Form'),
  loading: Loading,
});
const Map = Loadable({
  loader: () => import('./Map'),
  loading: Loading,
});
const Chart = Loadable({
  loader: () => import('./Chart'),
  loading: Loading,
});
const Carousel = Loadable({
  loader: () => import('./Carousel'),
  loading: Loading,
});
const Table = Loadable({
  loader: () => import('./Table'),
  loading: Loading,
});
const Compose = Loadable({
  loader: () => import('./Pages/Compose'),
  loading: Loading,
});
const Inbox = Loadable({
  loader: () => import('./Pages/Inbox'),
  loading: Loading,
});
const Invoice = Loadable({
  loader: () => import('./Pages/Invoice'),
  loading: Loading,
});
const Message = Loadable({
  loader: () => import('./Pages/Message'),
  loading: Loading,
});
const Page404 = Loadable({
  loader: () => import('./Pages/Page404'),
  loading: Loading,
});
const Page500 = Loadable({
  loader: () => import('./Pages/Page500'),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import('./Pages/Login'),
  loading: Loading,
});
const Register = Loadable({
  loader: () => import('./Pages/Register'),
  loading: Loading,
});
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/mcoreui/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/mcoreui/color', name: 'Color', component: Color, exact: true },
  { path: '/mcoreui/typo', name: 'Typo', component: Typo, exact: true },
  { path: '/mcoreui/form', name: 'Form', component: Form, exact: true },
  { path: '/mcoreui/map', name: 'Map', component: Map, exact: true },
  { path: '/mcoreui/calendar', name: 'Calendar', component: Calendar, exact: true },
  { path: '/mcoreui/chart', name: 'Chart', component: Chart, exact: true },
  { path: '/mcoreui/carousels', name: 'Carousel', component: Carousel, exact: true },
  { path: '/mcoreui/table', name: 'Table', component: Table, exact: true },
  { path: '/mcoreui/app/compose', name: 'Compose', component: Compose, exact: true },
  { path: '/mcoreui/app/inbox', name: 'Inbox', component: Inbox, exact: true },
  { path: '/mcoreui/app/invoice', name: 'Invoice', component: Invoice, exact: true },
  { path: '/mcoreui/app/message', name: 'Message', component: Message, exact: true },
  { path: '/mcoreui/app/page404', name: 'Page404', component: Page404, exact: true },
  { path: '/mcoreui/app/page500', name: 'Page500', component: Page500, exact: true },
  { path: '/mcoreui/app/login', name: 'Login', component: Login, exact: true },
  { path: '/mcoreui/app/register', name: 'Register', component: Register, exact: true },
  
];

export default routes;

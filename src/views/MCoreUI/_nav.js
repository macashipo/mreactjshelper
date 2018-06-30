const PathPrefix = "/mcoreui/";
const Items = [
  {
    title: true,
    name: 'MCoreUI',
    icon: 'icon-cursor',
  },
  {
    name: 'Base',
    icon: 'icon-layers',
    children: [
      {
        name: 'Buttons',
        url: PathPrefix + 'buttons',
        icon: 'icon-cursor',
      },
      {
        name: 'Color',
        url: PathPrefix + 'color',
        icon: 'icon-cursor',
      },
      {
        name: 'Typo',
        url: PathPrefix + 'typo',
        icon: 'icon-cursor',
      },
      {
        name: 'Calendar',
        url: PathPrefix + 'calendar',
        icon: 'icon-cursor',
      },
      {
        name: 'Form',
        url: PathPrefix + 'form',
        icon: 'icon-cursor',
      },
      {
        name: 'Map',
        url: PathPrefix + 'map',
        icon: 'icon-cursor',
      },
      {
        name: 'Chart',
        url: PathPrefix + 'chart',
        icon: 'icon-cursor',
      },
      {
        name: 'Carousel',
        url: PathPrefix + 'carousels',
        icon: 'icon-puzzle',
      },
      {
        name: 'Table',
        url: PathPrefix + 'table',
        icon: 'icon-puzzle',
      },
      
    ],
  },
  {
    name: 'Pages',
    icon: 'icon-layers',
    children: [
      {
        name: 'Compose',
        url: PathPrefix + 'app/compose',
        icon: 'icon-puzzle',
      },
      {
        name: 'Inbox',
        url: PathPrefix + 'app/inbox',
        icon: 'icon-puzzle',
      },
      {
        name: 'Invoice',
        url: PathPrefix + 'app/invoice',
        icon: 'icon-puzzle',
      },
      {
        name: 'Message',
        url: PathPrefix + 'app/message',
        icon: 'icon-puzzle',
      },
      {
        name: 'Page404',
        url: PathPrefix + 'app/page404',
        icon: 'icon-puzzle',
      },
      {
        name: 'Page500',
        url: PathPrefix + 'app/page500',
        icon: 'icon-puzzle',
      },
      {
        name: 'Login',
        url: PathPrefix + 'app/login',
        icon: 'icon-puzzle',
      },
      {
        name: 'register',
        url: PathPrefix + 'app/register',
        icon: 'icon-puzzle',
      },
    ],
  },
];

const NavMenuSidebar = {
  items: Items
};

export default NavMenuSidebar;
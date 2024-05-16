import { businessOutline, cashOutline, homeOutline, peopleOutline, personAddOutline } from 'ionicons/icons';

import NewPerson from '~/pages/NewPerson.tsx';

export const menuItems = [
  {
    icon: homeOutline,
    label: 'INÍCIO',
    url: '/',
    isActive: '',
  },
  {
    icon: businessOutline,
    label: 'ORGANIZAÇÕES',
    url: '/organizations',
  },
  {
    icon: peopleOutline,
    label: 'PARCEIROS',
    url: '/partners',
  },
  {
    icon: cashOutline,
    label: 'CONTAS',
    url: '/accounts',
  },
  {
    icon: personAddOutline,
    label: 'USUÁRIOS',
    url: '/new-person',
  },
];

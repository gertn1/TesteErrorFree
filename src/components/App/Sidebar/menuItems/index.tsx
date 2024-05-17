import { businessOutline, cashOutline, fingerPrintOutline, homeOutline, peopleOutline } from "ionicons/icons";

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
    icon: fingerPrintOutline,
    label: 'NOVO PARCEIRO',
    url: '/create-partner',
  },
];

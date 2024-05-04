import {
  IconFileDescription,
  IconFileCheck,
  IconUserCircle,
  IconLayout,
  IconHelp
} from '@tabler/icons';

import { uniqueId } from 'lodash';


const ClientItems = [
  {
    navlabel: true,
    subheader: 'Applications',
  },
  {
    id: uniqueId(),
    title: 'Your Applications',
    icon: IconLayout,
    href: '/tracking/applications',
  },
  {
    id: uniqueId(),
    title: 'Create new eGuarantee',
    icon: IconFileDescription,
    href: '/forms/application-form',
  },
  {
    navlabel: true,
    subheader: 'Guarantees',
  },
  {
    id: uniqueId(),
    title: 'Your Guarantees',
    icon: IconFileCheck,
    href: '/tracking/guarantees',
  },
  {
    id: uniqueId(),
    title: 'Indemnity Request',
    icon: IconFileDescription,
    href: '/indemnity',
  },
  {
    navlabel: true,
    subheader: 'Settings',
  },
  {
    id: uniqueId(),
    title: 'Account Setting',
    icon: IconUserCircle,
    href: '/account-settings',
  },
  {
    id: uniqueId(),
    title: 'FAQ',
    icon: IconHelp,
    href: '/faq',
  },
]

export default ClientItems

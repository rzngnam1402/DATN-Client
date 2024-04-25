import {
  IconFileDescription,
  IconAperture,
  IconUserCircle,
  IconLayout,
  IconHelp
} from '@tabler/icons';

import { uniqueId } from 'lodash';


const ClientItems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Account Setting',
    icon: IconUserCircle,
    href: '/account-settings',
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
    subheader: 'Settings',
  },
  {
    id: uniqueId(),
    title: 'FAQ',
    icon: IconHelp,
    href: '/faq',
  },
]

export default ClientItems

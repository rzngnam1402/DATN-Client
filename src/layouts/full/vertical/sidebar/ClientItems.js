import {
  IconFileDescription,
  IconAperture,
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
    title: 'Dashboard',
    icon: IconAperture,
    href: '/dashboards/modern',
    chip: 'New',
    chipColor: 'secondary',
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
    href: '/pages/faq',
  },
]

export default ClientItems

import {
    IconFileDescription,
    IconUserCircle,
    IconHelp,
    IconLayout,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const BankerItems = [{
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
    navlabel: true,
    subheader: 'Guarantees',
},
{
    id: uniqueId(),
    title: 'Issue Guarantee',
    icon: IconFileDescription,
    href: '/tracking/guarantees',
},
{
    navlabel: true,
    subheader: 'Indemnities',
},
{
    id: uniqueId(),
    title: 'Your Indemnities',
    icon: IconLayout,
    href: '/indemnity',
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
{
    id: uniqueId(),
    title: 'Account Setting',
    icon: IconUserCircle,
    href: '/account-settings',
},
]
export default BankerItems;

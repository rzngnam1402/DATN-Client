import {
    IconFileDescription,
    IconUserCircle,
    IconHelp,
    IconLayout,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const BankerItems = [{
    navlabel: true,
    subheader: 'Home',
},
{
    id: uniqueId(),
    title: 'Your Applications',
    icon: IconLayout,
    href: '/tracking/applications',
},
{
    id: uniqueId(),
    title: 'Issue Guarantee',
    icon: IconFileDescription,
    href: '/tracking/guarantees',
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

import {
    IconFileDescription,
    IconUserCircle,
    IconHelp,
    IconLayout,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const AdminItems = [{
    navlabel: true,
    subheader: 'Overview',
},
{
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayout,
    href: '/dashboard',
},
{
    navlabel: true,
    subheader: 'Users',
},
{
    id: uniqueId(),
    title: 'User List',
    icon: IconFileDescription,
    href: '/tracking/users',
},
{
    id: uniqueId(),
    title: 'Account Setting',
    icon: IconUserCircle,
    href: '/account-settings',
},
]
export default AdminItems;

import React from 'react';
import SidebarMenuComp from './SidebarMenuComp';

const data = [
    {
        header: "",
        items: [
            {
                text: 'Home',
                icon: 'home'
            },
            {
                text: 'Overview',
                icon: 'dashboard'
            },
            {
                text: 'Chat',
                icon: 'textsms'
            }
        ]
    },
    {
        header: "ASSETS",
        items: [
            {
                text: 'Properties',
                icon: 'house'
            },
            {
                text: 'Landloards',
                icon: 'supervised_user_circle'
            },
            {
                text: 'Tenants',
                icon: 'group'
            },
            {
                text: 'Service Professional',
                icon: 'person'
            },
            {
                text: 'Staffs',
                icon: 'assignmentind'
            }
        ]
    },
    {
        header: "ACCOUNTS",
        items: [
            {
                text: 'Rent Received',
                icon: 'arrow_downward'
            },
            {
                text: 'Rent Paid',
                icon: 'arrow_upward'
            }
        ]
    },
    {
        header: "SERVICES",
        items: [
            {
                text: 'Contracts',
                icon: 'thumbs_up_down'
            },
            {
                text: 'Documents',
                icon: 'description'
            }
        ]
    }
];

const SidebarComp = () => {
    return (
        <React.Fragment>
            {data.map((menu, idx) => <SidebarMenuComp menu={menu} idx={idx} key={idx}/>)}
        </React.Fragment>
    );
}

export default SidebarComp;
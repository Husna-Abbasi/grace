import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';

const { SubMenu } = Menu;

function getItem(label, key, icon, children, type, href) {
    return {
        key,
        icon,
        children,
        label,
        type,
        href,
    };
}

const items = [
    getItem('Dashboard', 'sub1', <MailOutlined />, null, null,'./dashboard', [
        // getItem('Dashboard', '1', null, null, null, './dashboard'),
        // getItem('Option 2', '2'),
        // getItem('Option 3', '3'),
        // getItem('Option 4', '4'),
    ]),
    getItem('Lesson', 'sub2', <AppstoreOutlined />, [
        getItem('Create Lesson', '5', null, null, null, './create-lesson'),
        getItem('Video Lesson', '6', null, null, null, './video-lesson'),
        getItem('Video Details', '7', null, null, null, './video-details'),
    ]),
    // getItem('Quiz', 'sub4', <SettingOutlined />, [
    //     getItem('Option 9', '9'),
    //     getItem('Option 10', '10'),
    // ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2'];

const DashboardSidebarComponent = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const renderMenuItems = (items) => {
        return items.map(item => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.label} >
                        {renderMenuItems(item.children)}
                    </SubMenu>
                );
            } else {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link href={item.href || '/'}>{item.label}</Link>
                    </Menu.Item>
                );
            }
        });
    };

    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 240 }}
        >
            {renderMenuItems(items)}
        </Menu>
    );
};

export default DashboardSidebarComponent;

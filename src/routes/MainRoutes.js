import React, { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';
import menuData from '../menu-items/json/menu-items.json';
import {FormattedMessage} from "react-intl";

const ConfigurableForms = Loadable(lazy(() => import('views/configurable-forms')));

/**
 * Fetch list of all menu items from API.
 * API data should contain all sections and their URLs.
 * No URL should be same.
 * Every URL should also contain section ID (User role entity data type ID)
 * Using UserRoleEntityDataType ID - attribute groups can be fetched to be displayed on their pages using ConfigurableComponent
 */

// ===========================|| MAIN ROUTING ||=========================== //
const configurableUrl = []

const makeConfigurableUrl = menuItem => {
    menuItem.children.map(menuChildren =>
        configurableUrl.push({
            path: menuChildren.url,
            element: <ConfigurableForms uuid={menuChildren.uuid} title={menuChildren.formatted_title} />
        })
    )
}
menuData.roles['case-manager'].map(makeConfigurableUrl);
const AppChat = Loadable(lazy(() => import('views/chat')));
const DisplayTable = Loadable(lazy(() => import('views/tables/DisplayTable')));

configurableUrl.push({
    path: 'chat',
    element: <AppChat />
})

configurableUrl.push({
    path: 'table',
    element: <DisplayTable />
})

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: configurableUrl
};

export default MainRoutes;



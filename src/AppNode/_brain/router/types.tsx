import React from 'react'
import { NOT_FOUND } from 'redux-first-router';
import StoreNode from '../../_nodes/StoreNode/_';
import CheckoutScene from '../../_nodes/StoreNode/_scenes/CheckoutScene/_';
import ProductScene from '../../_nodes/StoreNode/_scenes/ProductScene/_';
import ProductsScene from '../../_nodes/StoreNode/_scenes/ProductsScene/_';
import ShoppingCartScene from '../../_nodes/StoreNode/_scenes/ShoppingCartScene/_';
import AdminNode from '../../_nodes/StoreNode/_nodes/AdminNode/_';
import AuthorizationScene from '../../_nodes/StoreNode/_nodes/AdminNode/_scenes/AuthorizationScene/_';
import CreateStaffAccountScene from '../../_nodes/StoreNode/_nodes/AdminNode/_scenes/CreateStaffAccountScene/_';
import GraphsScene from '../../_nodes/StoreNode/_nodes/AdminNode/_scenes/GraphsScene/_';
import ProbabilityScene from '../../_nodes/StoreNode/_nodes/AdminNode/_scenes/ProbabilityScene/_';
import StaffNode from '../../_nodes/StoreNode/_nodes/StaffNode/_';
import ExportScene from '../../_nodes/StoreNode/_nodes/StaffNode/_scenes/ExportScene/_';
import ImportScene from '../../_nodes/StoreNode/_nodes/StaffNode/_scenes/ImportScene/_';

export const routeConstants = {
    STORE: {
        PRODUCTS: 'route/STORE/PRODUCTS',
        PRODUCT: 'route/STORE/PRODUCT',
        SHOPPING_CART: 'route/STORE/SHOPPING_CART',
        CHECKOUT: 'route/STORE/CHECKOUT'
    },
    ADMIN: {
        AUTHORIZATION: 'route/ADMIN/AUTHORIZATION',
        CREATE_STAFF_ACCOUNT: 'route/ADMIN/CREATE_STAFF_ACCOUNT',
        GRAPHS: 'route/ADMIN/GRAPHS',
        PROBABILITY: 'route/ADMIN/PROBABILITY'
    },
    STAFF: {
        IMPORT: 'route/STAFF/IMPORT',
        EXPORT: 'route/STAFF/EXPORT'
    },
}

export const appRoutes = {
    [routeConstants.STORE.CHECKOUT]: '/checkout',
    [routeConstants.STORE.PRODUCT]: '/product/:id',
    [routeConstants.STORE.PRODUCTS]: '/products',
    [routeConstants.STORE.SHOPPING_CART]: '/shopping-cart',
    [routeConstants.ADMIN.AUTHORIZATION]: '/admin/authorization',
    [routeConstants.ADMIN.CREATE_STAFF_ACCOUNT]: '/admin/create-staff-account',
    [routeConstants.ADMIN.GRAPHS]: '/admin/graphs',
    [routeConstants.ADMIN.PROBABILITY]: '/admin/probability',
    [routeConstants.STAFF.EXPORT]: '/staff/export',
    [routeConstants.STAFF.IMPORT]: '/staff/import'
}


export const scenesMapping = {
    [routeConstants.STORE.CHECKOUT]: <StoreNode><CheckoutScene /></StoreNode>,
    [routeConstants.STORE.PRODUCT]: <StoreNode><ProductScene /></StoreNode>,
    [routeConstants.STORE.PRODUCTS]: <StoreNode><ProductsScene /></StoreNode>,
    [routeConstants.STORE.SHOPPING_CART]: <StoreNode><ShoppingCartScene /></StoreNode>,
    [routeConstants.ADMIN.AUTHORIZATION]: <StoreNode><AdminNode><AuthorizationScene /></AdminNode></StoreNode>,
    [routeConstants.ADMIN.CREATE_STAFF_ACCOUNT]: <StoreNode><AdminNode><CreateStaffAccountScene /></AdminNode></StoreNode>,
    [routeConstants.ADMIN.GRAPHS]: <StoreNode><AdminNode><GraphsScene /></AdminNode></StoreNode>,
    [routeConstants.ADMIN.PROBABILITY]: <StoreNode><AdminNode><ProbabilityScene /></AdminNode></StoreNode>,
    [routeConstants.STAFF.EXPORT]: <StoreNode><StaffNode><ExportScene /></StaffNode></StoreNode>,
    [routeConstants.STAFF.IMPORT]: <StoreNode><StaffNode><ImportScene /></StaffNode></StoreNode>,
    [NOT_FOUND]: <StoreNode><ProductsScene /></StoreNode>,
}
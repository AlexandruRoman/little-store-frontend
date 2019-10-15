import { LocationState } from 'redux-first-router'
import { ModalsState } from './modals/types'
import { AuthState } from './auth/types';
import { ShoppingCartState } from './shopping-cart/types';
import { AnalyticsState } from './analytics/types';

export interface ApplicationState {
    readonly location: LocationState<string, any>
    readonly modals: ModalsState
    readonly auth: AuthState
    readonly shoppingCart: ShoppingCartState,
    readonly analytics: AnalyticsState
}
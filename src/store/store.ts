import { applyMiddleware, compose, createStore } from 'redux';
import RootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {AuthActionsType} from "./Authorisation/reducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;

export type StateType = ReturnType<typeof store.getState>
export type AllActions = AuthActionsType
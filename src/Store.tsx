import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducer';
const initialState = {};
const middleware:any = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //-- below will not work on Chrome incognito, Mobile Devices, iOS
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export type RootStore = ReturnType<typeof rootReducer>
export default store;
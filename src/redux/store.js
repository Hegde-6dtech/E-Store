import { configureStore } from '@reduxjs/toolkit'

import rootReducers from './reducer/index'

const store = configureStore({ reducer: rootReducers })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store

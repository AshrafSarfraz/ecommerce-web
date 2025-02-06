import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from './CartSlice';

const rootReducer = combineReducers({  // Combine your reducers into a root reducer
  cart:cartReducer
});

const persistConfig = { // Configuration for Redux Persist
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // Create the persisted reducer


const Mystore = configureStore({ // Configure the Redux store
  reducer: persistedReducer,
});

// Export the persistor if needed (for use in PersistGate)
export const persistor = persistStore(Mystore);

export default Mystore;


// import redux and persist plugins
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {persistStore} from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

// import theme reducers
import settingsReducer from './pages/settings/settingSlice';
import layoutReducer from './pages/layout/layoutSlice';
// import langReducer from './lang/langSlice';
// import authReducer from './auth/authSlice';
import menuReducer from './pages/layout/nav/main-menu/menuSlice';
// import notificationReducer from './layout/nav/notifications/notificationSlice';
// import scrollspyReducer from './components/scrollspy/scrollspySlice';

// import app reducers
// import calendarReducer from './views/apps/calendar/calendarSlice';
// import contactsReducer from './views/apps/contacts/contactsSlice';
// import chatReducer from './views/apps/chat/chatSlice';
// import mailboxReducer from './views/apps/mailbox/mailboxSlice';
// import tasksReducer from './views/apps/tasks/tasksSlice';

// import persist key
import { REDUX_PERSIST_KEY } from './config';

const persistConfig = {
  key: REDUX_PERSIST_KEY,
  storage,
  whitelist: ['menu', 'settings', 'lang'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    settings: settingsReducer,
    layout: layoutReducer,
    // lang: langReducer,
    // auth: authReducer,
    menu: menuReducer,
    // notification: notificationReducer,
    // scrollspy: scrollspyReducer,
    // calendar: calendarReducer,
    // contacts: contactsReducer,
    // chat: chatReducer,
    // mailbox: mailboxReducer,
    // tasks: tasksReducer,
  })
);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistedStore = persistStore(store);
export { store, persistedStore };

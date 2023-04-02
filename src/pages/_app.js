// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'public/css/vendor/OverlayScrollbars.min.css';
import 'public/css/vendor/plyr.css';
import 'public/css/styles.css';
import 'public/css/main.css';
import 'public/font/CS-Interface/style.css'
// import { wrapper } from "./store";
import { store, persistedStore } from "./store";
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { Provider } from 'react-redux';

let App = function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}


export default App

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/Store';
import Spinner from './views/spinner/Spinner';
import './_mockApis';
import './utils/i18n';
import AuthProvider from './axios/hooks/useAuth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </AuthProvider>,
);
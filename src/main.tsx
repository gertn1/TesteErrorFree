import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MyThemeProvider } from '~/theme/MyThemeProvider.tsx';

import App from './components/App';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
    </BrowserRouter>,
  );
}
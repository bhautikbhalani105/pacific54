import { Suspense } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import { setupAxios } from '../utils/functions';

import ErrorBoundary from '../components/common/Error';
import { LoaderWrapper } from '../components/common/loader';

import ThemeConfig from '../style/Config';
import GlobalStyle from '../style/Global';
import Routes from './routes';

setupAxios();

const queryClient = new QueryClient();

const AppContainer = () => (
  <ThemeConfig>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <LoaderWrapper>
              <h6 style={{ textAlign: 'center' }}>Loading</h6>
            </LoaderWrapper>
          }
        >
          <BrowserRouter>
            <GlobalStyle />
            <Routes />
          </BrowserRouter>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  </ThemeConfig>
);

export default AppContainer;

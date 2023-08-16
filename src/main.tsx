import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
// import './reset.css'
import '@/index.css'
import AppRouter from '@/routes/routes'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/store'

import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@/services/queryClient'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Profiler onRender={() => null} id="profiler">
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </ReduxProvider>
    </Profiler>
  </React.StrictMode>
)

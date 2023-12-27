import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes'
import { theme } from './utils/theme' 
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import store from './redux/store/store'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </ThemeProvider>
);







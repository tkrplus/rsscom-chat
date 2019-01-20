import React from 'react'
import ReactDOM from 'react-dom'
import {
  MuiThemeProvider
} from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import GlobalStyle from '~/src/const/GlobalStyle'
import '~/src/utils/FirebaseUtil'
import * as serviceWorker from './serviceWorker'
import theme from '~/src/const/Theme'
import store from './store'

import Thread from '~/src/components/pages/Thread'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <Thread />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'))

serviceWorker.unregister()

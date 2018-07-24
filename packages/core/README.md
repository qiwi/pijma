# @qiwi/pijma-core

Pijma core: assets, utils, primitives and themes.

## Install
```bash
npm i --save @qiwi/pijma-core
```

## Usage
```javascript
import {ThemeProvider, injectGlobal, fonts, reset} from '@qiwi/pijma-core'

class App extends Component {
  render () {
    return (<ThemeProvider theme={themes.orange}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path='/' component={TransactionList}/>
          </div>
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>)
  }
}

injectGlobal(fonts, reset, ...)
```

# @qiwi/pijma-desktop

Pijma desktop ui components.

## Install
```bash
npm i --save @qiwi/pijma-desktop
yarn add @qiwi/pijma-desktop
```

## Usage
At first it's necessary to init `ThemeProvider` and optionally to apply style reset.
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

Then you may use the imported components at your own discretion.
```javascript
import React, {Component} from 'react'
import {Button} from '@qiwi/pijma-desktop'

export default class MyComponent extends Component{
  render() {
    return (
      <div>
        <Botton text="foo"/>
      </div>
    )
  }
}
```

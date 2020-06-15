import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import ConfigureStore from './ConfigureStore.js'

import { App } from './components/App.js'

let {store, persistor} = ConfigureStore()

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App/>
		</PersistGate>
	</Provider>
	,
	document.querySelector('#root')
)
import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './css/main.css'
import { Provider } from "react-redux"
import store from "./reducers/store"

const app= ReactDOMClient.createRoot(document.getElementById("app"))

app.render(
    <Provider store={store}>
        <App />
    </Provider>
)
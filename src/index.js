import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import { getCountries} from "./actions/actions-countries";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>Empty project</h1>
            <DevTools/>
        </div>
    </Provider>
    , document.getElementById('root'));

store.dispatch(getCountries());
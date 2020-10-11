import {Provider, useDispatch, useSelector} from 'react-redux';
import {Route, HashRouter as Router} from 'react-router-dom';
import React from 'react';

import {getStyles} from './redux/thunks/thunks';
import FileInput from './components/MainWindow/FileInput/FileInput';
import Reader from './components/Reader/Filesreader/Reader';
import s from './App.module.css';
import store from './redux/indexRedux'
import {CookiesProvider} from 'react-cookie'

const App = (props) => {

    return ( 
    <div className = {s.App} >
        <Provider store = {store}> 
        <CookiesProvider> 
            <Router> 
                    <Route exact path = '/'>
                <Reader> 
                        TEst
                        <FileInput/> 
                </Reader> 
                    </Route>
            </Router> 
        </CookiesProvider> 
        </Provider>
    </div>
    )
}
export default App
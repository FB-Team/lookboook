import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import React from 'react';

import FileInput from './components/MainWindow/FileInput/FileInput';
import Reader from './components/Reader/Filesreader/Reader';
import s from './App.module.css';
import store from './redux/indexRedux'

const App = (props) => {
    return (
    <div className={s.App}>
        <Provider store = {store}>
            <Router>
                <Route path="/">
                <FileInput/>
                    </Route>
                <Route exact path = '/reader'>
                <Reader>
                </Reader>
                </Route>
            </Router>
        </Provider>
    </div>
    )
}
export default App

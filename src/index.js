/**
 * Created by glzc on 2018/3/13.
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './views';
const rootEle = document.getElementById('root');
let isRefresh = 'pushState' in window.history;
ReactDom.render(<App isRefresh={!isRefresh} />, rootEle, () => {
    console.log('******')
})
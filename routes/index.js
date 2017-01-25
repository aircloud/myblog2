var express = require('express');
var router = express.Router();

var qs = require('qs');

import {getarticlelist,getactivearticle} from '../api/index.api';
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configStore'
import configStoreArticle from '../common/store/configStoreArticle'
import App from '../common/containers/App'
import Article from '../common/containers/AppArticle';

var ALLARTICLE = {
    "data":
        [
            {"year":"2017","article":[{"title":"JS的静态作用域、子程序引用环境与参数传递类型","tag":["javascript"],"year":"2017","month":"1","time":"1/11/2017, 1:33:26 AM","ID":43}]}
        ]
};

function handleRender(tag,req, res) {
    // Query our mock API asynchronously
    getarticlelist(tag,apiResult => {
        // Read the counter from the request, if provided
        const params = qs.parse(req.query);
        const initialState =apiResult ||   ALLARTICLE ;

        // Compile an initial state

        // Create a new Redux store instance
        var store = configureStore(initialState);
        store.dispatch({
            type:'HANDLE_ARTICLE',
            content:initialState
        });

        // console.log("apiResult",apiResult);
        // console.log("initialState",initialState);
        // console.log("store",store.getState());

        // Render the component to a string
        const html = renderToString(
            <Provider store={store}>
                <App certainTag={tag}/>
            </Provider>
        );

        // Grab the initial state from our Redux store
        const finalState = store.getState();

        // Send the rendered page back to the client
        res.send(renderFullPage1(html, finalState))
    })
}

function handleArticle(req,res){
    getactivearticle(req,apiResult => {
        // Read the counter from the request, if provided
        const params = qs.parse(req.query);
        const initialState =apiResult ||   ALLARTICLE ;

        // Compile an initial state

        // Create a new Redux store instance
        var store = configStoreArticle(initialState);
        store.dispatch({
            type:'CHANGE_ARTICLE',
            content:initialState
        });

        // console.log("apiResult",apiResult);
        // console.log("initialState",initialState);
        // console.log("store",store.getState());

        // Render the component to a string
        const html = renderToString(
            <Provider store={store}>
                <Article />
            </Provider>
        );

        // Grab the initial state from our Redux store
        const finalState = store.getState();

        // Send the rendered page back to the client
        res.send(renderFullPage2(html, finalState))
    })
}

function renderFullPage1(html, initialState) {
    return `
    <!doctype html>
    <html>
      <meta name="baidu-site-verification" content="mDu29kcxAz" />
      <meta name="viewport" content="width=divice-width,initial-scale=1.2,user-scalable=no,maximum-scale=1">
      <head>
        <title>AirCloud</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="build.js"></script>
      </body>
    </html>
    `
}
function renderFullPage2(html, initialState) {
    return `
    <!doctype html>
    <html>
     <meta name="baidu-site-verification" content="mDu29kcxAz" />
      <meta name="viewport" content="width=divice-width,initial-scale=1.2,user-scalable=no,maximum-scale=1">
      <head>
        <title>AirCloud</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="build2.js"></script>
      </body>
    </html>
    `
}


/* GET home page. */
router.get('/', function(req, res, next) {

    var tag='';
    if(req.query.tag){
        console.log(req.query.tag);
        tag=req.query.tag;
    }
    handleRender(tag,req, res);

});

router.get('/:id', function(req, res, next) {
    console.log("req.params.id",req.params.id);
    if(req.params.id>0) {
        console.log("req.params.id",req.params.id);
        handleArticle(req, res);
    }

});


module.exports = router;

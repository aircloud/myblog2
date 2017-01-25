/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import { combineReducers } from 'redux'
import {CHANGE_ARTICLE,GET_TAGS} from '../actions/HandleCertainArticle'

var CERTAINARTICLE = {
    "item": {title:"",content:""}
};

//CHANGE_ARTICLE改变item
//GET_TAGS改变data len

const certainArticle = (state=CERTAINARTICLE,action)=>{
    switch (action.type) {
        case CHANGE_ARTICLE:
            if(state.data)
            return {item:action.content.item,data:state.data};
            else{
                return {item:action.content.item};
            }
        case GET_TAGS:
            return {item:state.item,data:action.content.data};
        default:
            return state;
    }
};

const articleReducer = combineReducers({
    certainArticle
});

export default articleReducer

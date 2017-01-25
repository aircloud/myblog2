/**
 * Created by Xiaotao.Nie on 22/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import { combineReducers } from 'redux'
import {HANDLE_ARTICLE,GET_TAGS} from '../actions/HandleArticle'

var ALLARTICLE = {
    "data":
        [
            {"year":"2017","article":[{"title":"JS的静态作用域、子程序引用环境与参数传递类型","tag":["javascript"],"year":"2017","month":"1","time":"1/11/2017, 1:33:26 AM","ID":43}]}
        ]
};

const allArticles = (state=ALLARTICLE,action)=>{
    switch (action.type) {
        case HANDLE_ARTICLE:
            if(state.tagdata)
                return {data:action.content.data,tagdata:state.tagdata};
            else{
                return {data:action.content.data};
            }
            return action.content;
        case GET_TAGS:
            return {data:state.data,tagdata:action.content.data};
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    allArticles
});

export default rootReducer

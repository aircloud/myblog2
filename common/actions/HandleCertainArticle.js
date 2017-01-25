/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
export const CHANGE_ARTICLE = 'CHANGE_ARTICLE';
export const GET_TAGS = 'GET_TAGS' ;


export const getArticle = (id)=> dispatch =>{
    return fetch("https://www.10000h.top/getactivearticle/"+id).then(response=>response.json()).then(
        responseText=>{
            dispatch(changeArticle(responseText));
        }
    )
};

export const changeArticle = jsonText =>({
    type:CHANGE_ARTICLE,
    content:jsonText
});

export const getAlltags = () => dispatch => {
    return fetch("https://www.10000h.top/gettags").then(response=>response.json()).then(
        responseText=>{
            dispatch(receiveAlltags(responseText));
        }
    )
};

export const receiveAlltags = jsonText =>({
    type:GET_TAGS,
    content:jsonText
});

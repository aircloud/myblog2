/**
 * Created by Xiaotao.Nie on 22/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
export const HANDLE_ARTICLE = 'HANDLE_ARTICLE';

export const GET_TAGS = 'GET_TAGS' ;

export const getAllarticle = ()=> dispatch =>{
    return fetch("https://www.10000h.top/getarticlelist").then(response=>response.json()).then(
        responseText=>{
            dispatch(receiveAllarticle(responseText));
        }
    )
};

export const receiveAllarticle = jsonText =>({
    type:HANDLE_ARTICLE,
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

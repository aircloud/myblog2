/**
 * Created by Xiaotao.Nie on 22/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import * as Actions from '../actions/HandleArticle'

//将state绑定到props
function mapStatetoProp(state){
    return {
        ArticleInfo:state.allArticles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStatetoProp, mapDispatchToProps)(ArticleList)

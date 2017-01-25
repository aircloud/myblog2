/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CertainArticle from '../components/CertainArticle'
import * as Actions from '../actions/HandleCertainArticle'

//将state绑定到props
function mapStatetoProp(state){
    return {
        articleInfo:state.certainArticle
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStatetoProp, mapDispatchToProps)(CertainArticle)

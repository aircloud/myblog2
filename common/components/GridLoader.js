/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */


/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import React, { Component, PropTypes } from 'react'
import '../../style/Gird.less'


class GridLoader extends Component {

    render(){
        return(
            <div style={{width: "100%", minHeight:"1000px", position: "fixed", background:"white",display:this.props.display}}>
                <div style={{margin: "auto", marginTop: 200, width:"105px", height:"105px",background:'url(\'/images/gridLoader.svg\')',display:this.props.display}}>
                </div>
            </div>
        )
    }

}

var styles ={
    Model: {
        width: "100%",
        minHeight:"1000px",
        position: "fixed",
        display: "flex",
        background:"white",
    },
    svg:{
        margin: "auto",
        marginTop: 200,
        width:"105px",
        height:"105px",
        background:'url(\'/images/gridLoader.svg\')'
    },

};

export default GridLoader;


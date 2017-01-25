/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import React, { Component, PropTypes } from 'react'
import '../../style/profile.less'
import 'whatwg-fetch'

class Catalog extends Component {

    constructor(props){
        super(props);

        this.state={
            start:{x:-1},
            left:0,
            max:0,
            min:-290,
            active:"",
        };
        this.startDrag=this.startDrag.bind(this);
        this.onDrag=this.onDrag.bind(this);
        this.stopDrag=this.stopDrag.bind(this);
    }

    componentDidMount() {
        var tag = this.GetQueryString("tag");
        if(tag)this.setState({
            active:tag
        });
        else this.setState({
            active:"主页"
        });
        // console.log(this.state.active,window.location);
    }

    GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = decodeURI(window.location.search.substr(1)).match(reg); //获取url中"?"符后的字符串并正则匹配
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    }

    startDrag(e) {
        // console.log("startDrag",e.pageX);
        e = e.touches ? e.touches[0] : e;
        this.state.start.x = e.pageX;
    }
    onDrag(e) {
        e = e.touches ? e.touches[0] : e;
        if(this.state.start.x!=-1) {
            this.setState({left: this.state.min < (this.state.left + e.pageX - this.state.start.x) ? (this.state.max > (this.state.left + e.pageX - this.state.start.x) ? (this.state.left + e.pageX - this.state.start.x) : this.state.max) : this.state.min });
            this.state.start.x=e.pageX;
        }

    }
    stopDrag(e) {
        this.state.start.x=-1;
    }

    render(){
        var tagsData = this.props.tag;
        return(
            <div className="catalog"
                 onMouseDown={(e)=>this.startDrag((e))}
                 onMouseMove={(e)=>this.onDrag(e)}
                 onMouseUp={(e)=>this.stopDrag(e)}
                 onMouseOut={(e)=>this.stopDrag(e)}
                 onClick={(e)=>this.stopDrag(e)}
            >
                <div className="catalogContainer"
                     style={{left:this.state.left+"px"}}>
                    <span><a href="/" style={{color:this.state.active=="主页"?"#E8E9EA":""}}>主页</a></span>
                    {
                        tagsData.map((certainTag,index) =>
                            <span key={index}><a href={"/?tag="+certainTag} style={{color:this.state.active==certainTag?"#E8E9EA":""}}>{certainTag}</a></span>
                        )
                    }
                </div>
            </div>
        )
    }

}


export default Catalog;

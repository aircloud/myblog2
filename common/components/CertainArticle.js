/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import React, { Component, PropTypes } from 'react'
import '../../style/certainArticle.less'
import '../../style/articleList.less'
import Profile from './Profile';
import GridLoader from  './GridLoader';
import Catalog from "./Catalog";
import Footer from "./Footer";
import 'whatwg-fetch'

class CertainArticle extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={display:"flex"};
    }

    componentDidMount() {
        var { getArticle,getAlltags } = this.props;
        getAlltags();
        // console.log("getAlltags");
        this.setState({display: "none"});

        var thisTime=Date.parse(new Date());
        if(!localStorage.getItem("visited"+this.props.articleInfo.item.id)){
            fetch("https://www.10000h.top/addarticlevisit/"+this.props.articleInfo.item.id);
            localStorage.setItem("visited"+this.props.articleInfo.item.id,"1");
            localStorage.setItem("visitedtime"+this.props.articleInfo.item.id,thisTime);
        }
        else{
            if(thisTime-localStorage.getItem("visitedtime"+this.props.articleInfo.item.id)>86400000){
                localStorage.removeItem("visitedtime"+this.props.articleInfo.item.id);
                fetch("https://www.10000h.top/addarticlevisit/"+this.props.articleInfo.item.id);
                localStorage.setItem("visitedtime"+this.props.articleInfo.item.id,thisTime);
            }
            else{
                //do nothing
            }
        }

    }

    render() {
        var articleInfo = this.props.articleInfo.item;
        var tagsData=[];
        if(this.props.articleInfo.data){
            tagsData=this.props.articleInfo.data;
        }
        // console.log(tagsData,articleInfo);
        return(

            <div className="Top">

                <GridLoader display={this.state.display}/>

                <div className="header">
                    <div className="titleList">
                        <div className="mainTitle">梦断JS</div>
                        <div className="subTitle">用执着为未来创造无限可能</div><br/>
                        <div className="url">https://www.10000h.top/2</div>
                    </div>
                    <Catalog tag={tagsData}/>
                    <div className="poly">
                        <div className="otherLink">
                            <a  title="我的CSDN博客" href="http://blog.csdn.net/ul646691993"><img src="images/CSDN.png"/></a>
                            <a  title="我的github" href="https://github.com/aircloud"><img src="images/github.png"/></a>
                            <a  title="我的邮箱" href="mailto:networknxt@gmail.com"><img src="images/email.png"/></a>
                        </div>
                        <div className="current"><a href="/">主页</a> > {articleInfo.title}</div>
                    </div>
                </div>

                <div className="mainContainer">

                    <div className="profile">
                        <Profile />
                    </div>
                    <div className="mainList">
                        <div className="Article_titleList">
                            <div className="Article_title">{articleInfo.title}</div>
                            <div className="Article_number">{articleInfo.visitors}浏览</div>
                        </div>
                        <div className="Article_navigation">
                            <a className="Article_last" href={"/"+articleInfo.pre.id}>上一篇:{articleInfo.pre.title}</a>
                            <div className="Article_time">{articleInfo.time}</div>
                            <a className="Article_next" href={"/"+articleInfo.nex.id}>下一篇:{articleInfo.nex.title}</a>

                        </div>

                        <div className="mainArticle" dangerouslySetInnerHTML={{__html: articleInfo.content}}></div>
                    </div>

                </div>

                <Footer/>
            </div>
        )
    }

}

export default CertainArticle;

/**
 * Created by Xiaotao.Nie on 22/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import React, { Component, PropTypes } from 'react'
import '../../style/articleList.less'
import Profile from './Profile';
import GridLoader from  './GridLoader';
import Catalog from "./Catalog";
import Footer from "./Footer";
import 'whatwg-fetch'


class ArticleList extends Component{

    constructor(props, context) {
        super(props, context);
        this.state={display:"flex"};
    }

    componentDidMount() {
        this.setState({display: "none"});
        var { getAllarticle,getAlltags} = this.props;
        if(!this.state.hasOwnProperty("TagsData"))getAlltags();
    }

    render() {

        var ArticleInfo = this.props.ArticleInfo.data;
        var tagsData=[];
        if(this.props.ArticleInfo.tagdata){
            tagsData=this.props.ArticleInfo.tagdata;
        }
        return (

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
                        <div className="current"><a href="/">主页</a></div>
                    </div>
                </div>

                <div className="mainContainer">
                    <div className="profile">
                        <Profile />
                    </div>
                    <div className="mainList">


                        {  ArticleInfo.map((yearArticle,index0)=>

                            <div  key={index0}>
                                <div className="yearList">
                                    <img src="images/calendar.png" className="yearLogo"/>
                                    <h4 className="yearInfo">{yearArticle.year}</h4>
                                </div>
                                <ul className="certainList">
                                    {
                                        yearArticle.article.map((CertainArticle,index) =>
                                            <li  key={index}>
                                                <a href={"/"+CertainArticle.ID}>{CertainArticle.title}</a>
                                                <span>{CertainArticle.time}</span>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }

}


export default ArticleList;

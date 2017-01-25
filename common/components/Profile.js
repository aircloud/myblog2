/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import React, { Component, PropTypes } from 'react'
import '../../style/profile.less'

class Profile extends Component {

    render(){
        return(
            <div className="myProfile">
                <img className="myPhoto" src="images/me.jpg"/>
                <p className="myName">AirCloud</p>
                <p className="myInfo1">
                    一个热爱开源、热爱web开发、热爱设计的即将毕业于ZJU目前还没找到工作的工科狗。
                </p>
                <p className="myInfo2">
                    和1.0相比:这个版本的个人博客采用了服务端渲染,代码完全重构,采用react+redux+webpack完成,业务逻辑不算复杂,重在学习方法。
                </p>

                <div className="otherLinks">
                    <div className="linksTitle">相关链接</div>
                    <div className="LinksGroup">
                        <p className="certainLink"><a href="https://www.10000h.top/">我的博客1.0版</a></p>
                        <p className="certainLink"><a href="https://github.com/aircloud/myblog">我的博客GitHub</a></p>
                        <p className="certainLink"><a href="https://github.com/aircloud/WebGL-obj-loader">webgl开源obj加载器</a></p>
                        <p className="certainLink"><a href="https://github.com/aircloud/myNatureColor">NACO</a></p>
                        <p className="certainLink"><a href="http://gkrbox.com/">gkrbox</a></p>
                    </div>
                </div>

                <div className="moreContact">
                    <p>欢迎进一步联系:</p>
                    <p>networkgmail.com</p>
                </div>
            </div>
        )
    }
}

export default Profile;

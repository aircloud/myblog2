/**
 * Created by Xiaotao.Nie on 24/1/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
import React, { Component, PropTypes } from 'react'
import '../../style/footer.less'
import 'whatwg-fetch'

class Footer extends Component {

    constructor(props){
        super(props);
        this.state={
            visitors:0
        }
    }

    componentDidMount() {

        fetch("https://www.10000h.top/getdata").then(response=>response.json()).then(
            response => {
                // console.log("response",response);
                this.setState({visitors:response[0].visitors})
            }
        );

        var thisTime=Date.parse(new Date());
        if(!localStorage.getItem("visited")){
            fetch("https://www.10000h.top/addvisit");
            localStorage.setItem("visited","1");
            localStorage.setItem("visitedtime",thisTime);
        }
        else{
            if(thisTime-localStorage.getItem("visitedtime")>86400000){
                localStorage.removeItem("visitedtime");
                fetch("https://www.10000h.top/addvisit");
                localStorage.setItem("visitedtime",thisTime);
            }
            else{
                //do nothing
            }
        }
    }

    render(){
        return(
            <div className="footer">
              <p>
                  <span>访客:{this.state.visitors}</span><span>@2016 XT.N 版权所有<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh">,遵循署名-相同方式共享4.0国际协议</a></span>
              </p>
            </div>
        )
    }
}

export default Footer;

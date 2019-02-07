import React, { Component } from 'react';

import '../common/css/reset.min.css';
import './navbar.css';
import {NavLink as Link,BrowserRouter as Router} from 'react-router-dom';
import Buton from './Buton';
import Butonorange from './Butonorange';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {drop:"none",leftmenu:false};
    }
    displaydp=()=>{
        this.setState({drop:"block"});
    }
    hidedp=()=>{
        this.setState({drop:"none"});
    }
    threeClick=()=>{
        this.setState({leftmenu:!this.state.leftmenu});
    }
    render() {
        return (
            <Router>
            <div>
            <div className="ipad-header" style={{marginLeft:this.state.leftmenu?"310px":0}}>
                <div className="btn" onClick={this.threeClick}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <Link className="brand" to={'/'}>
                    <img src="https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/header/img/vipkidHeader_52ec2f20.png"/>
                </Link>
                <div className="login">
                <Buton>登录</Buton>
                <Butonorange>注册</Butonorange>
                </div>
            </div>
            <div className="pc-header">
                <Link className="brand" to={'/'}>
                    <img src="https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/header/img/vipkidHeader_52ec2f20.png"/>
                </Link>
                <ul>
                    <li className="active">
                        <Link to={'/'} className="active">首页</Link>
                    </li>
                    <li>
                        <Link to={'/'}>北美师资</Link>
                    </li>
                    <li className="lesson" onMouseEnter={this.displaydp} onMouseLeave={this.hidedp}>
                        <Link to={'/'}>课程体系</Link>
                        <ul className="drop" style={{display:this.state.drop}}>
                            <li>
                                <Link to={'/'}>课程体系优势</Link>
                            </li>
                            <li>
                                <Link to={'/'}>VIPKID MC主修课程</Link>
                            </li>
                            <li>
                                <Link to={'/'}>VIPKID 全项进阶课程</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={'/classlist'}>公开课</Link>
                    </li>
                    <li>
                        <Link to={'/'}>如何上课</Link>
                    </li>
                    <li>
                        <Link to={'/'}>下载中心</Link>
                    </li>
                    <li>
                        <Link to={'/'}>最新动态</Link>
                    </li>
                </ul>
                <div className="login">
                    <Buton>登录</Buton>
                    <Butonorange>注册</Butonorange>
                </div>
            </div>
           
            <div className="left-navbar" style={{display:this.state.leftmenu?"block":"none"}}>
                <ul>
                    <li className="active">
                        <Link to={'/'}>首页</Link>
                    </li>
                    <li>
                        <Link to={'/'}>北美师资</Link>
                    </li>
                    <li>
                        <Link to={'/'}>课程体系</Link>
                    </li>
                    <li>
                        <Link to={'/classlist'}>公开课</Link>
                    </li>
                    <li>
                        <Link to={'/'}>如何上课</Link>
                    </li>
                    <li>
                        <Link to={'/'}>下载中心</Link>
                    </li>
                    <li>
                        <Link to={'/'}>最新动态</Link>
                    </li>
                </ul>
            </div>
            </div>
            </Router>
        );
    }
}

export default Navbar;
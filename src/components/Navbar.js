import React, { Component } from 'react';

import '../common/css/reset.min.css';
import './navbar.css';
import '../common/css/common.css';
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
            <div>
            <div className="head100">
            <div className="center nav-title clearfix">
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
                <Link className="brand" to={'/a'}>
                    <img src="https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/header/img/vipkidHeader_52ec2f20.png"/>
                </Link>
                <ul>
                    <li>
                        <Link to={'/'} exact={true}>首页</Link>
                    </li>
                    <li>
                        <Link to={'/teacher'}>北美师资</Link>
                    </li>
                    <li className="lesson" onMouseEnter={this.displaydp} onMouseLeave={this.hidedp}>
                        <Link to={'/lesson'}>课程体系</Link>
                        <ul className="drop" style={{display:this.state.drop}}>
                            <li>
                                <Link to={'/lesson1'}>课程体系优势</Link>
                            </li>
                            <li>
                                <Link to={'/lesson2'}>VIPKID MC主修课程</Link>
                            </li>
                            <li>
                                <Link to={'/lesson3'}>VIPKID 全项进阶课程</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={'/classlist'}>公开课</Link>
                    </li>
                    <li>
                        <Link to={'/how'}>如何上课</Link>
                    </li>
                    <li>
                        <Link to={'/down'}>下载中心</Link>
                    </li>
                    <li>
                        <Link to={'/try'}>最新动态</Link>
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
            </div>
            </div>
        );
    }
}

export default Navbar;
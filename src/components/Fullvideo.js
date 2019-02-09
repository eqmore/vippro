import React, { Component } from 'react';
import './fullvideo.css'
import {connect} from 'react-redux';
import actions from '../store/action/sectwo';
class Fullvideo extends Component {
    constructor(){
        super();
        this.state = {
            display:"none"
        }
    }
    componentDidMount(){
        console.log(this.props.display);
    }
    render() {
        return (
            <div className="fullvideo" style={{display:this.state.display}}>
                <video src="https://image.vipkid.com.cn/market/file/1539597232057-video-liutao.mp4" 
                    controls="controls" autoPlay="autoPlay" >
                    您的浏览器不支持 video 标签。
                </video>
            </div>
        );
    }
}

export default connect((state)=>({...state.sectwo}),actions)(Fullvideo);
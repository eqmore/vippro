import React, { Component } from 'react';
import './fullvideo.css'
import {connect} from 'react-redux';
import actions from '../store/action/sectwo';

class Fullvideo extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        console.log(this.props.display);
    }
    close = ()=>{
        this.props.playaudio("none");
        // this.x.style.display="none";
    }
    render() {
        return (
            <div className="fullvideo" style={{display:this.props.display}}
            ref = {x=>this.x=x}>
                <video src="https://image.vipkid.com.cn/market/file/1539597232057-video-liutao.mp4" 
                    controls="controls" autoPlay="autoPlay" >
                    您的浏览器不支持 video 标签。
                </video>
                <div className="closebtn"
                onClick={this.close}
                >X</div>
            </div>
        );
    }
}

export default connect((state)=>({...state.sectwo}),actions)(Fullvideo);